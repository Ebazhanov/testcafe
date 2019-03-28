import { Selector } from 'testcafe';

export default class CartPage {
  constructor () {
    this.acceptTermsOfUseCheckBox = Selector('[for="tos_agreement"]');
    this.submitButton = Selector('.fc-button.fc-button--submit span');
  }
}
