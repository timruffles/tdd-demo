describe("Story UI",function() {

  describe("viewing stories",function() {

    var storyView;

    before(function() {
      // since all our tests are purely read-only,
      // we don't need to make this a beforeEach.
      // The setup is very fast though, so in this case it wouldn't matter

      storyView = new StoryView({
        collection: [
          {
            id: 123,
            title: "Why we rewrote our startup in Lisp",
            score: 10,
            url: "http://pg-fanppl.com/lisp"
          },
          {
            id: 600,
            title: "'You can learn to code in your tea break', by someone who's never coded",
            score: 20,
            url: "http://www2.tories.org.uk"
          }
        ]
      })

      storyView.render();
    })

    it("stories are visible",function() {
      assert.equal($(".story",storyView.el).length,2)
    })

    it("displays titles",function() {
      // using .text() to ignore the HTML structure
      console.log(storyEl(123).length)
      assert.equal(storyEl(123).text(),getStory(123).title);
    })

    it.only("links stories to URLs",function() {
      var withUrl = storyEl(123).find("[href=" + getStory(123).url + "]");
      assert.equal(withUrl.length,1);
    })

    it("displays scores",function() {
      var number = parseInt(storyEl(123).find(".score").val());
      assert.equal(number,getStory(123).score);
    })

    it("sorts stories by score, highest to lowest",function() {
      var ids = $("[data-id]",storyView.el).map(function(i,el) {
        return el.attr("data-id")
      });
      assert.equal([600,123],ids);
    })

    // test helper functions, so we can change the implementation
    // of the view without having to change all of our tests
    // (e.g how do we get an el for a story, this might
    // change if we move to a collection view/item view collab, or 
    // we changed the collection data-structure).
    function storyEl(id) {
      return $("[data-id=" + id + "]",storyView.el).eq(0);
    }
    function getStory(id) {
      return _.find(storyView.collection,function(story) {
        return story.id === id;
      })
    }

  })
  
  describe("voting on stories",function() {

    it("upvoting a story sends an upvote command")

    it("downvoting a story sends a downvote command")

  })

})

var assert = chai.assert;
