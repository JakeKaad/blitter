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
  }
});
