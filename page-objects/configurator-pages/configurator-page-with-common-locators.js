import { Selector } from 'testcafe';

export default class ConfiguratorPage {
  constructor() {
    // Configurator tabs
    this.headerMenuTabs = {
      firstTab: Selector('[class*="leftContainer"] > div > button:nth-child(1)'),
      secondTab: Selector('[class*="leftContainer"] > div > button:nth-child(2)'),
      thirdTab: Selector('[class*="leftContainer"] > div > button:nth-child(3)'),
    };

    // Configurator image
    this.configurator = {
      image: Selector('[class^="ConfiguratorImage__configuratorImage"] img'),
      loader: Selector('[class^="Loader"]'),
    };

    // Cookies Banner
    this.closeButton = Selector("[class*='CookieBanner__banner'] [class*='CookieBanner__close__app']");

    // Product details
    this.productDetails = {
      minCeilingHeightMsg: Selector('div:nth-child(3) > div.ProductSpecsTable__heightInfo__app-src-shared-components-ProductSpecsTable-')
    };

    // General Buttons
    this.applyButton = Selector('[icon-name="\'configurator/apply\'"] button');
    this.selectAllButton = Selector('[name="SelectAllButton"] button');

    // Dropdown Button
    this.dropdownButton = Selector('.explanatory-line [name="DropdownButton"] button');
    this.dropdownButtonSecond = Selector('span:nth-child(4) [name="DropdownButton"] button');

    // Dropdown Button Options
    this.dropdownButtonOptionFirst = Selector('[class^="DropdownButton__options"] span:nth-child(1) button');
    this.dropdownButtonOptionSecond = Selector('[class^="DropdownButton__options"] span:nth-child(2) button');
    this.dropdownButtonOptionThird = Selector('[class^="DropdownButton__options"] span:nth-child(3) button');
    this.dropdownButtonOptionFourth = Selector('[class^="DropdownButton__options"] span:nth-child(4) button');
    this.dropdownButtonOptionLast = Selector('[class^="DropdownButton__options"] span:last-child button');

    // Labels
    this.labelFirst = Selector('[class^="component-overlay__item"]:nth-child(1) button', { timeout: 0 });
    this.labelFourth = Selector('.component-overlay__item:nth-child(4) button', { timeout: 0 });

    // Labels Dropdown Options
    this.labelDropdownOptionFirst = Selector('[class^="LabelDropdown__option"] li:nth-child(1)');
  }
}
