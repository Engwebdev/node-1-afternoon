const express = require("express");
const bodyParser = require("body-parser");
const cont = require("../server/controllers/messages");

const port = 3001;

const app = express();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../public/build`));

const url = "/api/messages";
app.post(url, cont.create);
app.get(url, cont.read);
app.put(`${url}/:id`, cont.update);
console.log(cont.deleteMessage);
app.delete(`${url}/:id`, cont.deleteMessage);

app.listen(port, () => {
  console.log(`${port}`);
});
