from selenium import webdriver

def get_img_tag(url, browser=webdriver.PhantomJS()):
    browser.get(url)
    png = browser.get_screenshot_as_base64()
    img = "<img src='data:image/png;base64,{}'>".format(png)
    return img

