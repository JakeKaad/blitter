Blitter.BleatController = Ember.ObjectController.extend({
  actions: {
    hideBleat: function() {
      this.set("small", false)
    },
    showBleat: function() {
      this.set("small", true)
    }
  }
});
