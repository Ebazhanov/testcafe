import { Selector } from 'testcafe';

export default class Page {
  constructor () {
    this.firstArmEditLabel = Selector('div:nth-child(2) > span > span > button');
    this.delete = Selector('[class^="JoynModuleModifier__deleteButtonContainer"] button');
    this.addArmLabel = Selector('div[class^="Scaler__container"] > div > div:nth-child(1) button');
    this.smallArm = Selector('div:nth-child(3) > div[class^="JoynModuleModifier__optionButtonsContainer"] > button:nth-child(1)');
  }
}
