var AYLIENTextAPI = require("aylien_textapi");
var textapi = new AYLIENTextAPI({
  application_id: "74441adb",
  application_key: "8b3ffb4ef82d6cad6023421e8e0aee48",
});

const endpoint = "https://api.aylien.com/api/v1";

const text = textapi.sentiment(
  {
    text: "John is a very bad football player!",
  },
  function (error, response) {
    if (error === null) {
      console.log(response);
      return response;
    }
  }
);
console.log(text);
module.exports = text;
