import { Selector } from 'testcafe';

export default class ConfiguratorShelfPage {
  constructor() {
    this.labelAddSecond = Selector('[class*="component-overlay__item"]:nth-child(2) [icon-name="\'configurator/add-full.svg\'"] button', { timeout: 0 });
    this.labelAddThird = Selector('[class*="component-overlay__item"]:nth-child(3) [icon-name="\'configurator/add-full.svg\'"] button', { timeout: 0 });
    this.labelAddForth = Selector('[class*="component-overlay__item"]:nth-child(4) [icon-name="\'configurator/add-full.svg\'"] button', { timeout: 0 });
    this.labelAddSeventh = Selector('[class*="component-overlay__item"]:nth-child(7) [icon-name="\'configurator/add-full.svg\'"] button', { timeout: 0 });

    // Dropdown Button
    this.dropdownButton = Selector('[name="DropdownButton"] button');

    // Dropdown Options
    this.dropdownButtonOptionFirst = Selector('[class^="DropdownButton__options"] span:nth-child(1) button');
    this.dropdownButtonOptionSecond = Selector('[class^="DropdownButton__options"] span:nth-child(2) button');

    // General buttons
    this.applyButton = Selector('[icon-name="\'configurator/apply\'"] button');
  }
}
