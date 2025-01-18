# Intermittent Failure to Receive POST Request Data in Express.js

This repository demonstrates a bug where an Express.js application intermittently fails to receive the data from POST requests.  The `req.body` object is sometimes empty, causing unexpected behavior in the application.

## Bug Description

A seemingly simple Express.js application using `express.json()` middleware to parse JSON bodies is sporadically failing to populate `req.body`.  This results in the application processing an empty object instead of the expected data, leading to errors or incorrect logic.

## Bug Reproduction

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `node bug.js` to start the server.
5. Send a POST request to `/data` with JSON data (e.g., using curl or Postman).
6. Observe that the server's console logs sometimes show an empty object for `req.body`, while other times it logs the expected data.

## Solution

The solution involves ensuring that the request body is fully parsed before being accessed. This can be achieved by using the `body-parser` middleware in addition to `express.json()` or by explicitly specifying the content-type header in the client's POST request.