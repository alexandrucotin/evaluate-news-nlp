var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
var AYLIENTextAPI = require("aylien_textapi");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

projectData = {};

//API
var textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY,
});

const app = express();


//middlewares
app.use(express.static("dist"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

console.log(__dirname);

//routes
app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.post("/data", function (req, res) {
  console.log("this is the body", req.body);
  textapi.sentiment(
    {
      url: req.body.url,
      document: "document",
    },
    function (error, response) {
      if (error === null) {
        // console.log("this is the response.polarity: ", response.polarity);
        projectData = response;
      }
    }
  );
  console.log("this is the projectData after the api call: ", projectData);
  res.send(projectData);
});

//running server
app.listen(8081, function () {
  console.log("The server is running on port 8081!");
});
