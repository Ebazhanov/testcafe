import { Selector } from 'testcafe';

export default class PaymentMethodPage {
  constructor () {
    this.nextButton = Selector('#checkout-display #block-continue .btn.pink-button');
  }
}
