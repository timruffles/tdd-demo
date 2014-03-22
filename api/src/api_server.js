var express = require("express");
var stories = require("./stories_api.js");

module.exports = function apiServer(dependencies) {
  var app = express();

  app.use(express.json());

  stories(app);

  return app;
}
