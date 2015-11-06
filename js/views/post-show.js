FlickrFeed.Views.PostShow = Backbone.View.extend({
  template: _.template($('#index-template').html()),

  className: 'post-show-view',

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template({post: this.model}));
    return this;
  }
});
