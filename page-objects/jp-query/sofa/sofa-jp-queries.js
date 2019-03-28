export default class SofaJpQueries {
  constructor () {
    this.getShapeSkuForMainBed = '$..*[?(@.container == "mainBed")].*[?(@.container == "shape")]..cover_sku';
    this.getCushionSkuForBaseModule = '$..*[?(@.container == "baseAndLegs")]..cover_sku';
    this.getLeftCushionSku = '$..*[?(@.container == "cushions")].children[0]..cover_sku';
    this.getRightCushionSku = '$..*[?(@.container == "cushions")].children[1]..cover_sku';
    this.getNumbersOfLegsForArmrest = '$..*[?(@.container == "legs")]..sku';
    this.getNumbersOfSleepingModules = '$..*[?(@.container == "base_container")]..sku';
    this.getNumbersOfLegsForSleepingModules = '$..*[?(@.container == "baseAndLegs")].children..children';
    this.getAllExistingSkusForBaseModules = '$..*[?(@.container == "base_container")]..cover_sku';
    this.getAllSkuNumbersForArmrests = '$..*[?(@.container == "armrestAndLegs")].children[?(@.container == "shape")]';
    this.getAllNumbersOfSkuForBaseModules = '$..*[?(@.container == "baseAndLegs")]..sku';
    this.getSkuOfExtentionForBaseModule = '$[\'children\'][1][\'children\'][0].*[?(@.container == "mainBedAndLegsBox")]' +
      '.*[?(@.container == "mainBed")].*[?(@.container == "main")].*[?(@.container == "base_container")].*[?(@.container == "baseAndLegs")]' +
      '.*[?(@.container == "shape")]..sku';
  }
}
