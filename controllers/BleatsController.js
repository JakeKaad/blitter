Blitter.BleatsController = Ember.ArrayController.extend({
  itemController: "bleat",
  sortAscending: false,
  sortProperties: ["timestamp"],
  actions: {
    createBleat: function() {
      bleats.addObject({
        id: bleats.length + 1,
        body: this.newBleatBody,
        timestamp: new Date(),
      });
    }
    // hideBleat: function(bleat) {
    //   Ember.set(bleat, "small", false)
    // },
    // showBleat: function(bleat) {
    //   Ember.set(bleat, "small", true)
    // }
  }
});
