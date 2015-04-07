// TerrainItemHelper

export class TerrainItemHelper {
  static generateImage(item) {
    // Parse the item clipboardData
    var terrainData = TerrainItemHelper.getTerrainData(item);
    var tileset     = item.tileset;
    var imageWidth  = TILESIZE * terrainData.sizeX;
    var imageHeight = TILESIZE * terrainData.sizeY;
    // Split the tiles up into four character chunks
    var terrainHexData = terrainData.terrainHexData.match(/.{1,4}/g);

    var spawn = Npm.require('child_process').spawn;

    // TODO set the url for the image to a temporary image
    // so that more than one request does not happen

    // TODO
    command = spawn('php', []);

    command.stdout.on('data',  function (data) {
      console.log('stdout: ' + data);
    });

    command.stderr.on('data', function (data) {
      console.log('stderr: ' + data);
    });

    command.on('exit', function (code) {
      console.log('child process exited with code ' + code);
    });

    command.on('exit', function (code) {
      console.log('child process exited with code ' + code);
    });

    // console.log(terrainData);
    // _.each(terrainHexData, function (tileHex) {
    //   var offsetY = tileHex.slice(0, 3);
    //   var offsetX = tileHex.slice(3, 4);

    //   // Grab the corresponding image tile
    //   // TODO
    //   console.log(offsetX, offsetY);
    // });
  }

  static getTerrainData(item) {
    var terrainData = '';

    if (item.scmdraftClipboardData &&
        item.scmdraftClipboardData != '') {
      terrainData = SCMDraftHelper.parseTerrainData(item.scmdraftClipboardData);
    } else if (item.clipboardData &&
               item.clipboardData != '') {
      terrainData = SCMDraftHelper.parseTerrainData(item.clipboardData);
    }

    return terrainData;
  }
}