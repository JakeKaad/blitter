Blitter.BleatsController = Ember.ArrayController.extend({
  sortAscending: false,
  sortProperties: ["id"],
  actions: {
    createBleat: function() {
      bleats.addObject({
        id: bleats.length + 1,
        body: this.newBleatBody
      });
    }
  }

});
