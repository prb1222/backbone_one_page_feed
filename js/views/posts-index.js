FlickrFeed.Views.PostsIndex = Backbone.View.extend({
  template: _.template($('#index-template').html()),

  initialize: function () {
    this.listenTo(this.collection, "add", this.addPostItem);
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  addPostItem: function (post) {
    var postItemView = new FlickrFeed.Views.PostItem({model: post});
    $('ul.index-feed').append(postItemView.render().$el);
    this.resizeTitle(postItemView);
  },

  resizeTitle: function (view) {
    var $hidden = view.$el.find('div.hidden');
    var $content = view.$el.find('.index-item-content');
    var title = $hidden.text();
    var truncate = false
    while ($hidden.width() > $content.width()) {
      var truncate = true;
      var title = $hidden.text().slice(0, title.length - 1);
      $hidden.text(title);
    }
    if (truncate) {
      title = title.slice(0, title.length - 3) + "...";
    }
    view.$el.find('span.title-span').text(title);
  }
});
