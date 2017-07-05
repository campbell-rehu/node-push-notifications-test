# Node App Using Push Notifications

## Introduction

This is a test application that allows a user to send a push notification using a form in the browser. It uses [Pushover](https://pushover.net/) and [pushover-notifications](https://github.com/qbit/node-pushover) package for Node to send the messages between the server and the client.

## Thoughts

This application was used to test whether a Node application could easily be set up to send notifications to a mobile phone. I plan to implement the Pushover system in a Tessel 2 environment which sends me notifications when a circuit has been broken, light goes on etc. depending on the application.

Thus far, I have only connected this application to my smartphone which is limiting because the app must be installed on the device to receive notifications. This is not a huge issue though.

The next step will be to transfer this code to the Tessel project.

## Screenshots

### Main Screen:
![app-first-screen](./images/screen1.png)

### Message Confirmation Screen:
![app-second-screen](./images/screen3.png)

### iPhone Screenshot:
![iphone-screenshot](./images/iphone-screenshot.jpg)