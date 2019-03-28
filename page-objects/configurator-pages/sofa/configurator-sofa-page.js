import { Selector } from 'testcafe';

export default class ConfiguratorSofaPage {
  constructor() {
    // Configurator Module tab > Labels
    this.configuratorModulesTab = {
      fistLabelOption: Selector('[class*="Scaler"] div:nth-child(1) > span > span > [class*=Button]'),
      secondLabelOption: Selector('[class*="Scaler"] div:nth-child(2) > span > span > [class*=Button]'),
      thirdLabelOption: Selector('[class*="Scaler"] div:nth-child(3) > span > span > [class*=Button]'),
      fourthLabelOption: Selector('[class*="Scaler"] div:nth-child(4) > span > span > [class*=Button]'),
      fifthLabelOption: Selector('[class*="Scaler"] div:nth-child(5) > span > span > [class*=Button]'),
      sixthLabelOption: Selector('[class*="Scaler"] div:nth-child(6) > span > span > [class*=Button]'),
      seventhLabelOption: Selector('[class*="Scaler"] div:nth-child(7) > span > span > [class*=Button]'),
      eighthLabelOption: Selector('[class*="Scaler"] div:nth-child(8) > span > span > [class*=Button]')
    };

    // Configurator Module tab > Base-Modules in popup
    this.baseModulesOption = {
      firstModule: Selector('.col-md-12:nth-child(1) button:nth-child(1)'),
      secondModule: Selector('.col-md-12:nth-child(1) button:nth-child(2)'),
      thirdModule: Selector('.col-md-12:nth-child(1) button:nth-child(3)'),
      fourthModule: Selector('.col-md-12:nth-child(1) button:nth-child(4)'),
      fifthModule: Selector('.col-md-12:nth-child(1) button:nth-child(5)'),
      fifthModuleIsNotClickable: Selector('.col-md-12:nth-child(1) button:nth-child(5)[class*="Button__disabled__app"]')
    };

    // Configurator Module tab > Edge modules in popup
    this.edgesModulesOptionInPopup = {
      firstModule: Selector('.col-md-12:nth-child(2) button:nth-child(1)'),
      secondModule: Selector('.col-md-12:nth-child(2) button:nth-child(2)'),
      thirdModule: Selector('.col-md-12:nth-child(2) button:nth-child(3)'),
      fourthModule: Selector('.col-md-12:nth-child(2) button:nth-child(4)'),
      fifthModule: Selector('.col-md-12:nth-child(2) button:nth-child(5)'),
      sixthModule: Selector('.col-md-12:nth-child(2) button:nth-child(6)'),
    };

    // Modules menu option > Armrest&Corners
    this.armrestAndCornersModulesOption = {
      firstModuleIsNotClickable: Selector('.col-md-12:nth-child(3) button:nth-child(1)[class*="Button__disabled__app"]'),
      secondModuleIsNotClickable: Selector('.col-md-12:nth-child(3) button:nth-child(2)[class*="Button__disabled__app"]'),
      thirdModuleIsNotClickable: Selector('.col-md-12:nth-child(3) button:nth-child(3)[class*="Button__disabled__app"]'),
    };

    // Modules menu option > Delete
    this.deleteModuleOption = {
      deleteButton: Selector('.col-md-12:nth-child(4) button:nth-child(1)')
    };

    // Configurator Color tab
    this.configuratorColorTab = {
      moduleMenuButton: Selector('div.row.JoynColors__colorsLine__app-src-configurators-joyn-components-JoynColors- > span:nth-child(2) > button'),
      moduleMenuPopup: Selector('[class*="Dropdown__options__app-src-shared-components-Dropdown-"]'),
      materialsAndColorsMenuButton: Selector('div.row.JoynColors__colorsLine__app-src-configurators-joyn-components-JoynColors- > span:nth-child(4) > button'),
      materialsAndColorsPopup: Selector('[class*="Tooltip__popover__app-src-shared-components-Tooltip-"]'),
      applyButton: Selector('.Button__bigPrimarySquare__app-src-shared-components-Button- > div'),
      selectAllLabelsButton: Selector('[class*="Button__bigRectangleFilled__app-src-shared-components-Button-"]'),
      // Labels
      firstLabel: Selector('div.Scaler__container__app-src-configurators-shared-components-Scaler- > div > div:nth-child(1)'),
      secondLabel: Selector('div.Scaler__container__app-src-configurators-shared-components-Scaler- > div > div:nth-child(2)'),
      thirdLabel: Selector('div.Scaler__container__app-src-configurators-shared-components-Scaler- > div > div:nth-child(3)'),
      fourthLabel: Selector('div.Scaler__container__app-src-configurators-shared-components-Scaler- > div > div:nth-child(4)'),
    };

    // Configurator Color tab > Modules menu
    this.modulesMenuDropDown = {
      firstOption: Selector('[class*="DropdownButton__options"] > span:nth-child(1) button'),
      secondButton: Selector('[class*="DropdownButton__options"] > span:nth-child(2) button', { timeout: 0 }),
      thirdButton: Selector('[class*="DropdownButton__options"] > span:nth-child(3) button'),
      fourthButton: Selector('[class*="DropdownButton__options"] > span:nth-child(4) button')
    };

    // Configurator Color tab > Color menu > Colors and Materials
    this.colorsDropDownMenu = {
      colorNr8: Selector('[class*="JoynColorOptions__colorsContainer"] span:nth-child(8)', { timeout: 0 }),
    };

    // Configurator Legs tab
    this.legsType = {
      classicButton: Selector('[class*="JoynLegs__colorsLine"] button:nth-child(2)'),
      cyrcleButton: Selector('[class*="JoynLegs__colorsLine"] button:nth-child(3)'),
      nordycButton: Selector('[class*="JoynLegs__colorsLine"] button:nth-child(4)'),
    };

    // Product details
    this.productDetailsBlock = {
      dimensions: Selector('div:nth-child(1) > div:nth-child(3) > div.ProductSpecsTable__right__app-src-shared-components-ProductSpecsTable-'),
    };
  }
}
