FlickrFeed.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "index",
  },

  index: function () {
    var postsCollection = new FlickrFeed.Collections.Posts();
    postsCollection.fetch();
    var view = new FlickrFeed.Views.PostsIndex({collection: postsCollection});
    this.swapView(view)
  },

  swapView: function(view) {
    this._view && this._view.remove();
    this._view = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
})
