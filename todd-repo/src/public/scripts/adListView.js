var AdView = Backbone.View.extend({

  template: function(ad) {
    return `<div class="ad clearfix">
              <a class="ad-link" href="${ad.targetURL}" target="_blank" data-advertiserId="${ad.advertiserId}">
                <img src="${ad.imageURL}" />
              </a>
            </div>`;
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

});

var AdListView = Backbone.View.extend({

  children: [],

  initialize: function() {
    this.collection.on('reset', this.render, this);
    this.collection.on('add', this.renderAd, this);
    this.$el.on('click', function(evt) {
      var clicked = evt.target.parentElement;
      if (clicked.matches('.ad-link')) {
        recordClickAnalytics(clicked.getAttribute('data-advertiserId'));
      }
    });
    // start ad rotation
    this.collection.fetch();
    setInterval(function() {
      this.collection.fetch({ reset: true });
    }.bind(this), 10000);
  },

  render: function() {
    // empty the element
    this.el.innerHTML = '';

    // set children length to 0
    this.children.length = 0;

    // remove children inot dom tree node
    // this.children.forEach((child) => {
    //   child.remove();
    // })

    this.collection.each((model) => {
      this.renderAd(model);
    });
    return this;
  },

  renderAd: function(ad) {
    var view = new AdView({
      model: ad
    });
    this.$el.prepend(view.render().$el);
    this.children.push(view);
  }

});


function recordClickAnalytics() {
  console.log('someone clicked on an ad!!');
}
