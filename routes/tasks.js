var express = require("express");
var router = express.Router();
var request = require("request");

router.get("/", function(req, res, next) {
  getTasks("sathish", function(data){
    res.render("tasks/index", { title:"data" ,  model: JSON.parse(data) });
  });
});

function getTasks(username, cb) {
  var options = {
    method: "POST",
    url: "https://nodeze.com:3001/api/actionscripts/run",
    qs: {
      script: "35",
      deploy: "43"
    },
    headers: {
      authorization:
        "Basic 0135666d-485a-4692-8c0a-67aec649a881",
      "content-type": "application/json"
    },
    body: JSON.stringify({ user: username })
  };
  request(options, function(error, response, body) {
    if (error) throw new Error(error);
    //console.log(body);
    //console.log(response);
    cb(body);
  });
}

module.exports = router;
