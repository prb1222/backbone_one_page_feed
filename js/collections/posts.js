FlickrFeed.Collections.Posts = Backbone.Collection.extend({
  url: "https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json",

  parse: function (response) {
    debugger;
  }
});
