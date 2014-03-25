var _ = require("underscore");

module.exports = function(app) {

  var storyId = 1;
  var stories = {
  };

  app.post("/stories",function(req,res) {

    var story = _.pick(req.body,"title","url");
    if(!validUrl(story.url)) {
      return res.send(400,"Invalid URL");
    }

    story.id = storyId;

    storyId += 1; 

    res.send(story);


  });

  function validUrl(url) {
    // obviously not very accurate :)
    return /^http/.test(url);
  }

}
