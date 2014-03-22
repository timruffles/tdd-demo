var server = require("../src/api_server.js");
var supertest = require("supertest");

describe("Story API",function() {

  var app;
  var request;
  beforeEach(function() {
    app = server({});
    request = supertest(app);
  })

  describe("creating stories",function() {

    it("creates a story on valid submission",function(done) {
      submit({
          title: "Why Javascript is like a burrito",
          url: "http://pseudtasia.cc"
        })
        .expect(200)
        .expect(function(res) {
          assert.isNumber(res.body.id)
        })
        .end(done);
    })

    it.only("rejects stories with invalid URLS",function(done) {
      submit({
          title: "Why Javascript is like a burrito",
          url: "this isn't a URL"
        })
        .expect(400)
        .end(done);
    })

    function submit(story) {
      return request.post("/stories")
        .set('Content-Type', 'application/json')
        .send(story);
    }

  })
  
  describe("voting on stories",function() {

    it("upvoting a story increases score",function() {
    })

    it("downvoting a story decreases score",function() {
    })

  })

})
