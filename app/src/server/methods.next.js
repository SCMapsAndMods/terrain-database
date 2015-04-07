Meteor.methods({
  'saveTerrainItem' : function ({
    title = 'No Title',
    keywords = [],
    clipboardData = '',
    tilset = 'Jungle'
  }) {
    check(title, String);
    check(keywords, Array);
    check(clipboardData, String);
    check(tileset, String);

    // TODO Save image
  },
  'generateTerrainItemImage' : function (_id) {
    check(_id, String);

    var item = TerrainItem.findOne({
      _id : _id
    });

    if (item &&
        ( item.image === '' ||
          item.image == null ) ) {
      // Generate the item image
      TerrainItemHelper.generateImage(item);
    } else {
      throw new Error('No TerrainItem image to generate!');
    }
  }
})