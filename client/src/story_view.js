var StoryView = (function() {


  function StoryView(opts) {
    this.collection = opts.collection;
    this.el = opts.el || document.createElement("ul");
    _.each(this.events,function(method,eventSetup) {
      var nameSelector = eventSetup.split(" ");
      var name = nameSelector[0];
      var selector = nameSelector[1];
      var $el = $(this.el);
      var handler = this[method].bind(this);
      if(selector) {
        $el.on(name,selector,handler);
      } else {
        $el.on(name,handler);
      }
    },this);
  }

  StoryView.prototype = {
    template: _.template(template()),
    events: {
      "click .up": "upvoted",
      "click .down": "downvoted",
    },
    upvoted: function(event) {
      var story = $(event.target).closest(".story");
      var id = parseInt(story.attr("data-id"));
      votePersistence.up(id);
    },
    downvoted: function(event) {
      var story = $(event.target).closest(".story");
      var id = parseInt(story.attr("data-id"));
      votePersistence.down(id);
    },
    render: function() {
      this.el.innerHTML = this.template({
        collection: this.collection.slice().sort(function(a,b) {
          return b.score - a.score;
        })
      });
    }
  }

  return StoryView;

  function template() {
    return [
      "<% _.each(collection,function(item) { %>",
        "<li class='story' data-id='<%= item.id %>'>",
          "<a href='<%= item.url %>'>",
            "<%= item.title %>",
          "</a>",
          "<span class=score>",
            "<%= item.score %>",
          "</span>",
          "<div class='voting'>",
            "<button class=up>+1</button>",
            "<button class=down>-1</button>",
          "</div>",
        "</li>",
      "<% }) %>"
    ].join("")
  }

})();
