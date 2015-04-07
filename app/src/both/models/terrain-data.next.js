export class TerrainData {
  constructor({
    sizeX = 0,
    sizeY = 0,
    terrainHexData = ''
  }) {
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.terrainHexData = terrainHexData;
  }
}