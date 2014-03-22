var StoryView = (function() {


  function StoryView(opts) {
    this.collection = opts.collection;
    this.el = opts.el || document.createElement("ul");
  }

  StoryView.prototype = {
    template: _.template(template()),
    render: function() {
      this.el.innerHTML = this.template(this);
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
        "</li>",
      "<% }) %>"
    ].join("")
  }

})();
