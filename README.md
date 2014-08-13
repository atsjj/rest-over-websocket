# REST over WebSocket

Demonstration of how to use a WebSocket as an additional interface to HTTP for communicating with a REST API.

## Getting Started

### Install

Clone the repository and run `npm install`.

### Running

In your terminal window, run `node index.js`. Then, open your browser to [http://localhost:8000/hello](http://localhost:8000/hello).

You will need to open your browser's developer tools so you can see the log message. If everything worked, you should see an object with several properties that resemble an HTTP response.

## Introduction

This small Node.js example makes use of four modules:

1. [Hapi](http://hapijs.com/)
2. [Primus](https://github.com/primus/primus)
3. [Primus Responder](https://github.com/swissmanu/primus-responder)
4. [WS](https://github.com/einaros/ws)

Incoming HTTP requests are routed through Hapi to the appropriate route handler. The handler is called with a `request` and `response`, which is written to the browser.

WebSocket messaging is handled by WS, wrapped by Primus. The Primus Responder plugin enables a request-response lifecycle, making the WebSocket *message* act like a *callback*.

In the browser, the Primus client JS library is loaded and a new Primus instance is created. A call is made with Primus Responder with a *request* object that Hapi can understand, which is passed over the WebSocket and results in a call being made to Hapi's `server.inject` method.

The resulting response should be an object which is passed back over the WebSocket and logged to the client's console.

## Caveats

This example is merely a proof-of-concept and while useful, may not support the needs of a production environment. This example assumes no security, cookies, session or other features.

## License

The MIT License (MIT)

Copyright (c) 2014 Steven Jabour

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.