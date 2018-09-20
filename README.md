# Natural E-Learning Mobile
We will build the app on the windows system

## Requirment
Node.js version 8 or later.\
npm version 6 or later.\
Python2.\
JDK.

## Installation
### Node, JDK, Python2
We recommend installing Node and Python2 via [Chocolatey](https://chocolatey.org/install), a popular package manager for Windows.\
Open CMD as Adminstrator, run the following command:

```
choco install -y nodejs.install python2 jdk8
```

### React Native
Node comes with npm.\
Run the following command in CMD:

```
npm install -g react-native-cli
```

## Building the sources

```
cd nelMobile
npm install
```

## Run app on physical devices

Run the following command to check the connect with devices:

```
adb devices
```

Run `react-native run-android` inside your React Native project folder, you should see the app running in your device.
