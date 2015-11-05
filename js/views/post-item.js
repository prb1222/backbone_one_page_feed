FlickrFeed.Views.PostItem = Backbone.View.extend({
  template: _.template($('#feed-item-template').html()),

  render: function () {
    this.$el.html(this.template({post: this.model}));
    return this;
  },
});
