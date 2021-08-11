# Node.js-Rest-API<!-- omit in toc -->

## Table of Contents<!-- omit in toc -->

- [Introduction](#introduction)
- [Firebase Auth](#firebase-auth)
- [Objectives](#objectives)
- [Getting Started](#getting-started)
  - [1. Clone the repository](#1-clone-the-repository)
  - [2. Dependencies](#2-dependencies)
  - [3. Firebase Auth](#3-firebase-auth)
  - [`⚠️ Security Considerations Before You Get Started`](#️-security-considerations-before-you-get-started)
  - [Create an account](#create-an-account)
  - [Building a Firebase Web App](#building-a-firebase-web-app)
  - [Enabling Firebase Auth Authentication](#enabling-firebase-auth-authentication)
    - [Email/Password Auth Method](#emailpassword-auth-method)
  - [Adding Firebase Admin to the Node.js Backend](#adding-firebase-admin-to-the-nodejs-backend)
    - [**This json file is very important and it is very sensitive.**](#this-json-file-is-very-important-and-it-is-very-sensitive)
    - [Storing the Keys in an `.env` File](#storing-the-keys-in-an-env-file)
    - [⚠️ Important](#️-important)
- [Project](#project)
  - [1. nodemon](#1-nodemon)
  - [2. Running the Client App](#2-running-the-client-app)
  - [3. Login](#3-login)
- [Resources](#resources)
- [Technologies used](#technologies-used)
- [Authors](#authors)

## Introduction

- REST API using Node.js, Express.js, MongoDB and Mongoose.
- Implement authentication using Firebase.

## Firebase Auth

<img src='src/img/fb-auth-logo.png' width='300'>

An easier and more scalable solution is to use Firebase Auth.

- easy to setup
- easy to add different authentication methods
- great documentation
- no maintenance

## Objectives

- Gain experience on entity schema definition and relationships
- Learn how to connect to a MongoDB database using a node.js driver
- Learn how to execute Queries and CRUD operations using a node.js driver
- Learn how to implement a node.js REST API
- Gain experience using API development tools like Postman
- Improve your knowledge of backend development

<br>

## Getting Started

### 1. Clone the repository

---

First, you will need to clone the repo:

```bash
$ git clone https://github.com/solaz0824/Node.js-Rest-API.git
```

and client side

```bash
$ git clone https://github.com/solaz0824/rest-api-with-firebase-client.git
```

### 2. Dependencies

---

Then, you will need to install the dependencies in each side (server and client) with: `npm install`.

```
$ npm install
```

### 3. Firebase Auth

---

### `⚠️ Security Considerations Before You Get Started`

<p style="color:red;">

> Before you create the account make sure that you use a Gmail account that has a **strong password**, with **2FA authentication enabled** and with **no credit card added**.

</p>

---

### Create an account

- In order to get started, you will need to create an account.

Go to the following url: `https://firebase.google.com/` and click on the `Get Started` button. This will ask you to create an account and then you will be able to create a Firebase project.

<img src='src/img/fb-get-started.png' width='600'>

Once you have signed in you will be able to create a new project by clicking on `Add project`.

<img src='src/img/fb-create-project.png' width='600'>

Then, you will see the following wizard to create the project.

<img src='src/img/fb-create-step-1.png' width='600'>

In the second step you can disable analytics because we won't need it in this project.

<img src='src/img/fb-create-step-2.png' width='600'>

Then, you should see a screen similar to the following:

<img src='src/img/fb-create-step-3.png' width='600'>

Once the project was created, click on `Continue`

<img src='src/img/fb-create-step-4.png' width='600'>

---

## Congrats! 🎉 <!-- omit in toc -->

You have just created your first Firebase project.

---

### Building a Firebase Web App

- For the next step we need to create an app. Firebase can be used in the web, Android or iOS apps, but in this case we will use it in a web app.

- To continue, you will need to click on `web` button.

<img src='src/img/fb-project-done.png' width='600'>

- This will open a wizard to create the project.

<img src='src/img/fb-web-01.png' width='600'>

- To continue click on `Register App`.

> This will finish the creation process and give you the keys and project config you will need to get started.

<img src='src/img/fb-web-02.png' width='600'>

---

Copy the `firebaseConfig` object and save it in the `src/firebase/firebase.js` file of the Client Side App bellow the following comment.

```js
// Paste your config object here ⬇️
const firebaseConfig = {
  // config from the firebase dashboard
};
```

Then you will be able to access the Firebase console by clicking the `Continue to console` button.
<br><br>

### Enabling Firebase Auth Authentication

- To enable the Firebase Auth for your app you will need to click on the `Build` and `Authentication` tabs in the sidebar UI.

<img src='src/img/fb-auth-tab.png' width='600'>

- And by clicking on the `Get Started` button you will redirected to the Firebase Auth dashboard.

<img src='src/img/fb-auth-dashboard.png' width='600'>
<br>
<br>

#### Email/Password Auth Method

- In order to be able to allow users to login with their email and password you will need to enable the `Email/Password` auth method.

<img src='src/img/fb-auth-email.png' width='600'>

- If you also need to use the Google Auth Pop Up you will need to enable the `Google` option.

- For this method you will need to add the email you created the Firebase account with as the support email.

<img src='src/img/fb-auth-google.png' width='600'>

- Then, click save on both methods and you now have enabled the email/password and Google authentication methods for your app.

<img src='src/img/fb-auth-enabled.png' width='600'>
<br>

### Adding Firebase Admin to the Node.js Backend

Then, you will need to create a service account that you will have to use to connect to Google Services.

To do so, open the project settings of the project you just created before.

<img src='src/img/fb-project-settings.png' width='600'>

Then click on `Generate new private key` to create a key and the download button.

<img src='src/img/fb-new-private-key.png' width='600'>

<img src='src/img/fb-download-private-key.png' width='600'>

This will download a `.json` file with the keys you will need to use in the Node.js app to identify yourself in the Google Cloud services.

#### **This json file is very important and it is very sensitive.**

⚠️ You should make sure that the file can't be accessed by anyone else but yourself. If other people have access to it they might use it on your behalf and you might receive a large bill by the end of the month.

> ⚠️ DO NOT INCLUDE IT IN THE GIT REPOSITORY

> ⚠️ IT SHOULD NOT BE PUBLIC TO ANYONE

Therefore, to securely use the keys from the service account, you can copy and store each key in an `.env` file. This way you can use it locally and once we know how to deploy the server online we will also use this information.

#### Storing the Keys in an `.env` File

First, you will need to create an `.env` file and store each key of the service account `.json` file as a new entry.

The `.env` file should be stored in the root folder of the project.

```bash
.
├── README.md
├── package.json
├── src
├── ...
└── .env
```

Your `.env` file should look similar to this with the values of each key set to the one from your service account —mine are removed so that they can't be used by others.

> ⚠️ NEVER SHARE YOUR API KEYS WITH ANYONE

#### ⚠️ Important

The `FB_CERT_PRIVATE_KEY` must be wrapped in double quotes, otherwise you will get an error from firebase.

```bash
FirebaseAppError: Failed to parse private key: Error: Invalid PEM formatted message.
```

```bash
MONGO_DB_URL_PRODUCTION=mongodb://localhost/rest-api-pill
MONGO_DB_URL_DEVELOPMENT=mongodb://localhost/rest-api-pill
MONGO_DB_URL_TEST=mongodb://localhost/rest-api-pill
ACCESS_TOKEN_SECRET=myaccesstokensecretthatshouldnotbeshare
PORT= YOUR PORT NUMBER HERE (example-> 3000 \*\* it has to match with the port number in config.js file)


TYPE = service_account
PROJECT_ID = --------------------
PRIVATE_KEY_ID = --------------------
PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\blabla\n-----END PRIVATE KEY-----\n"
CLIENT_EMAIL = --------------------
CLIENT_ID = --------------------
AUTH_URI = https://accounts.google.com/o/oauth2/auth
TOKEN_URI = https://oauth2.googleapis.com/token
AUTH_PROVIDER_X_509_CERT_URL = https://www.googleapis.com/oauth2/v1/certs
CLIENT_X_509_CERT_URL = https://www.googleapis.com/robot/v1/metadata/x509/--------------------
```

These values are used in the `src/config/config.js` file which is responsible for storing all the config info of our app.
<br>
<br>

## Project

### 1. nodemon

In your terminal, enter this line below

```bash
$ nodemon
```

or

```bash
$ npm run dev
```

Now, you have seed data already made. <br><br>

Also, you can check your data by using this line below in another terminal

```bash
$ mongo
```

### 2. Running the Client App

In order to start the client app, open the repo with your code editor and run the `npm run start` script. This should start the React App Dev Server and a tab in your browser that you can connect to the React app to the following url: `http://localhost:3000/`.

<br>

### 3. Login

Now, try to log in by clicking `Login with Google` button.

<br>

## Resources

- Password hash: https://github.com/kelektiv/node.bcrypt.js
- dotenv: https://github.com/motdotla/dotenv
- express: https://expressjs.com/
- express security best practices:
  https://expressjs.com/en/advanced/best-practice-security.html
- Official MongoDB documentation: https://www.mongodb.com/
- W3Schools MongoDB:
  https://www.w3schools.in/mongodb/query-operations/
- MongoDB queries: https://docs.mongodb.com/manual/tutorial/query-documents/
- MongoDB University: https://university.mongodb.com/
- MVC Pattern: https://en.wikipedia.org/wiki/Model–view–controller

## Technologies used

- `Node.js`
- `eslint`
- `prettier`
- `Mongodb`
- `Postman`
- `bcrypt`
- `body-parser`,
- `cross-env`,
- `dotenv`,
- `express`,
- `helmet`,
- `jsonwebtoken`,
- `loglevel`,

  <br><br>

## Authors

Eunyoung Kim [@solaz0824](https://github.com/solaz0824)
