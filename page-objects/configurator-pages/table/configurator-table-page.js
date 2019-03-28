import { Selector } from 'testcafe';

export default class ConfiguratorTablePage {
  constructor() {
    // Labels (specified for Table, otherwise Android changes the order of elements in the DOM and we can't rely on nth-child)
    this.labelDrawerLeft = Selector('[class^="component-overlay__item"]  [label-id*="left_drawer"] button', { timeout: 0 });
    this.labelExtensionLeft = Selector('[class^="component-overlay__item"] [label-id="$.extensions.left"] button', { timeout: 0 });
    this.labelFrameRight = Selector('[class^="component-overlay__item"] [label-id="$.frames.right"] button', { timeout: 0 });
    this.labelLegFrontLeft = Selector('[class^="component-overlay__item"] [label-id="$.legs.front_left"] button', { timeout: 0 });
  }
}
