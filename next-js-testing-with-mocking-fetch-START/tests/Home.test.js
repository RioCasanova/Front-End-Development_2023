// we are not using a browser so we are going to import this
// this makes it so that when we call fetch it behaves without
// throwing an error
import "isomorphic-fetch"; // needed for no "fetch is not defined errors

import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";

// import mock server to serve responses to our tests
import { http, HttpResponse } from "msw"; // this will essentially mock the rest calls.
import { setupServer } from "msw/node"; // we'll set up a "mocked" server

// this is the path of the api that we want to put in our first argument
import { BASE_URL } from "../utils/api/base.js"; // we'll need this for our "mocked" server
import Home from "../pages/index.js";

// server setup

// quote that we are using, what is going to be send from the 'backend'
const QUOTE =
  "All I required to be happy was friendship and people I could admire.";
const AUTHOR = "Charles Baudelaire";

const server = setupServer(
  // the argument below is the path of the api
  // the second arg: serve the dummy response or test response
  http.get(`${BASE_URL}/random`, (res, req, ctx) => {
    // below this is going to be the "mocked" response
    return HttpResponse.json({
      content: QUOTE,
      author: AUTHOR,
    });
  })
);

// makes the server run before all the tests
beforeAll(() => {
  server.listen();
});

// close the server after all the tests
afterAll(() => {
  server.close();
});
