# Remote Viewing

## Problem

Web browser security is [fragile](https://twitter.com/trishankkarthik/status/690633707120660480): all it takes is one mistake,
your browser is compromised, and there goes your computer.

There are several solutions which we find unsuitable for various reasons:

* *Do not visit untrusted web sites.* Unfortunately, it can be difficult to discern between trusted and untrusted web sites,
especially when trusted sites may embed resources from untrusted ones.
* *Use a browser extension that automatically block untrusted web sites.* We feel that these extensions break too much
usability for average users.

## Solution

Our solution is simple: let a virtual machine open that untrusted link for you. It is like using a robot to remotely open that
suspicious package for you. If it explodes, too bad for the robot, but you can always build a new one.

One nice thing about this solution is that it is smartphone-friendly: the virtual machine may be on a remote machine. Using a remote virtual machine also reduces the risk of attackers compromising the original machine.

### Architecture

![Remote Viewing Architecture](https://github.com/SantiagoTorres/remote_viewing/blob/master/docs/IMG_2132.JPG)

## Acknowledgements

* [CIA](http://skepdic.com/remotevw.html).
