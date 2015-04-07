export var TerrainItem = new Mongo.Collection('terrainItem');

TerrainItem.attachSchema(new SimpleSchema({
  title : {
    type: String,
    label: 'Title',
    max: 200
  },
  keywords : {
    type: [String],
    label: 'Keywords',
    max: 20,
    maxCount: 3,
    optional: true
  },
  tileset : {
    type: String,
    label: 'Tileset',
    allowedValues: TILESETS,
    defaultValue: TILESETS[0]
  },
  image : {
    type: String,
    label: 'Path to Image',
    optional: true,

  },
  scmdraftClipboardData : {
    type: String,
    label: 'Raw SCMDraft Clipboard Data',
    regEx: /^[0-9A-F]*$/
  },
  sizeX : {
    type: Number,
    label: 'Terrain Size X',
    optional: true
  },
  sizeY : {
    type: Number,
    label: 'Terrain Size Y',
    optional: true
  },
  terrainData : {
    type: String,
    label: 'Terrain Raw Data Tiles',
    optional: true
  }
}));

if (Meteor.isServer) {
  // TODO support pagination
  Meteor.publish('terrainItem', function () {
    return TerrainItem.find();
  });
}

if (Meteor.isClient) {
  Meteor.subscribe('terrainItem');
}
