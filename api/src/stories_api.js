var _ = require("underscore");

module.exports = function(app) {

  app.post("/stories",function(req,res) {

    var story = _.pick(req.body,"title","url");
    if(!validUrl(story.url)) {
      return res.send(400,"Invalid URL");
    }

  });

  function validUrl(url) {
    // obviously not very accurate :)
    return /^http/.test(url);
  }

}
