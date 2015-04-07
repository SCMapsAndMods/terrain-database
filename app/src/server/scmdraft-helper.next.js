export class SCMDraftHelper {
  static parseTerrainData(clipboardData) {
    /**
     * The clipboard data in the the following format:
     *
     * - 52524554000000 - RRET.... SCMDraft header
     * - XX00YY00 - the width (XX) and the height (YY)
     * - And then after that, every 16 bits (or 
     *   4 characters in the string) are tiles.
     *
     * The first 3 characters of each 4 character
     * set denote the height offset of the tile
     * in the tilesheet.  The 4th character denotes
     * the width offset of the tile.
     *
     * Example: 4204 is the 0x420'th tile from the
     * top and the 0x4 from the left.
     */
    console.log(clipboardData);
    var sizeHex  = clipboardData.slice(16, 24);
    var tilesHex = clipboardData.slice(24, clipboardData.length);

    var sizeX       = parseInt(sizeHex.slice(0, 2), 16);
    var sizeY       = parseInt(sizeHex.slice(4, 6), 16);
    
    return new TerrainData({
      sizeX : sizeX,
      sizeY : sizeY,
      terrainHexData : tilesHex
    });
  }
}