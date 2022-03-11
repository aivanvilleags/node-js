const {send} = require('./my-request.mjs');
// import { send } from "./my-request.mjs";
const {read} = require('./my-response.mjs');

const makeRequest = (url,data) => { 
  send(url,data)
  return read()
}

const data = makeRequest('https://google.com', 'hello')
console.log(data);
