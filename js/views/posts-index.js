FlickrFeed.Views.PostsIndex = Backbone.View.extend({
  template: _.template($('#feed-item-template').html()),

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addPostItem);
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  addPostItem: function (post) {
    var postItemView = new FlickrFeed.Views.PostItem({model: post});
    $('ul.index-feed').append(postItemView.render().$el);
  }
});
