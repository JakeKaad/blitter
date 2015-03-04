Blitter.BleatController = Ember.ObjectController.extend({
  itemController: "rebaa",
  actions: {
    hideBleat: function() {
      this.set("small", false)
    },
    showBleat: function() {
      this.set("small", true)
    },
    createRebaa: function(newRebaaBody) {
      var rebaa = {};
      rebaa.body = newRebaaBody;
      this.model.rebaas.push(rebaa)
    }
  }
});

Blitter.RebaaController = Ember.ObjectController.extend({

});
