import { Selector } from 'testcafe';

export default class WardrobesPage {
  constructor () {
    this.minCeilingHeightMsg = Selector('div:nth-child(3) > div.ProductSpecsTable__heightInfo__app-src-shared-components-ProductSpecsTable-');
  }
}
