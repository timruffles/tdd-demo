var votePersistence = (function() {

  var api = {
    up: function(storyId) {
      return api._vote(storyId,"up");
    },
    down: function(storyId) {
      return api._vote(storyId,"down");
    },
    _vote: function(storyId,direction) {
      $.post("/stories/" + storyId + "/votes",{
        vote: direction
      });
    }
  }

  return api;

})();
