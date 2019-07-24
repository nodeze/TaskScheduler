var express = require("express");
var router = express.Router();
var request = require("request");

router.get("/", function(req, res, next) {
  getTasks("sathish", res);
});

function getTasks(username, res) {
  var options = {
    method: "POST",
    url: "https://nodeze.com:3001/api/actionscripts/run",
    qs: {
      script: "35",
      deploy: "43"
    },
    headers: {
      authorization:
        "Basic c2F0aGlzaC5hQHByYXRlZWt0ZWNobm9zb2Z0LmNvbTpOZXRzdWl0ZUAxMjM=",
      "content-type": "application/json"
    },
    body: JSON.stringify({ user: username })
  };
  request(options, function(error, response, body) {
    if (error) throw new Error(error);
    //console.log(body);
    //console.log(response);
    res.render("/tasks/index", { model: JSON.parse(body) });
  });
}

module.exports = router;
