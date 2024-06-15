// Create web server
// Create a web server that listens on port 3000. When you visit the root URL, it should display a page with a form that has a text field and a submit button. When you type a message into the text field and click the submit button, it should send a POST request to /message. The message should be saved in a global variable, and the page should display the message that was saved. The page should also contain a link that sends a GET request to /message, which should display the message that was saved.

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

let message = '';

app.get('/', (req, res) => {
  res.send(`
    <form method="post" action="/message">
      <input name="message" />
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/message', (req, res) => {
  message = req.body.message;
  res.send(message);
});

app.get('/message', (req, res) => {
  res.send(message);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
