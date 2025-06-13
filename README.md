# Simple Contact Form Server

This project provides a small form in `index.html` and a Node.js server to handle form submissions.

## Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.

## Install dependencies
```bash
npm install
```

## Run the server
```bash
node server.js
```
The server will start on `http://localhost:3000` and serve the static files in this directory.

Open your browser at `http://localhost:3000/index.html` to load the form.

Form submissions are sent to `POST /contact` and stored in `contacts.json`.
