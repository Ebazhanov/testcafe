import { Selector } from 'testcafe';

export default class ShelfConfiguratorPage {
  constructor() {
    // Dimensions & Legs tab
    this.dimensionsTab = {
      heightDropdownButton: Selector('[class="explanatory-line"] > span:nth-child(2) [name="DropdownSlider"] button'),
      sliderDropdownStepNr6: Selector('.rc-slider-step span:nth-child(6)', { timeout: 0 }),
      sliderDropdownStepNr7: Selector('.rc-slider-step span:nth-child(7)', { timeout: 0 }),
      sliderDropdownApplyButton: Selector('[class*="DropdownSlider__options"] button')
    };
  }
}
