import selenium
from selenium import webdriver
import socket
import atexit
import threading

browser = webdriver.Firefox()

HOST = ''
PORT = 8000

serverSocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

serverSocket.bind((HOST, PORT))
serverSocket.listen(5)

@atexit.register
def quit_server():
    try:
        serverSocket.close()
        clientSocket.close()
    except:
        pass

def handle_client_thread(client):
    try:
        message = client.recv(1024)
        if not message:
            client.close()
            return
        else:
            url = "http://"+message.split()[1]
            browser.get(url)
            output = browser.get_screenshot_as_base64()
        client.send("HTTP/1.1 200 OK\nContent-Type: text/html\r\n\r\n"+
                    "<html><body>"+
                    "<img src='data:image/png;base64,{}'>".format(output)+
                    "</body></html>")
    except:
        client.send("HTTP/1.1 404 Not Found\nContent-Type: text/html\r\n\r\n"+
                    "<html><body>"+
                    "Something went wrong"+
                    "</body></html>")
        client.close()
        
def main_thread():
    while True:
        clientSocket, addr = serverSocket.accept()
        threading.Thread(target=handle_client_thread, args=(clientSocket,)).start()

if __name__ == "__main__":
    try:
        main_thread()
    except:
        quit_server()
