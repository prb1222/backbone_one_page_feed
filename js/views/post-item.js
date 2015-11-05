FlickrFeed.Views.PostItem = Backbone.View.extend({
  template: _.template($('#index-template').html()),

  render: function () {
    this.$el.html(this.template({post: this.model}));
    return this;
  },
});
