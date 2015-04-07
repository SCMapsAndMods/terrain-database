Template.terrainList.helpers({
  terrainList : function () {
    var items = TerrainItem.find().fetch();

    _.each(items, function(item) {
      // Make sure each item has an image
      if (item.image) {
        // Nothing to do
      } else {
        Meteor.call('generateTerrainItemImage', item._id, function (error, message) {
          if (error) {
            // TODO handle error
          } else {
            // TODO handle message
          }
        });
      }
    });
    
    return items;
  }
})
