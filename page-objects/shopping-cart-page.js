import { Selector } from 'testcafe';

export default class CartPage {
  constructor() {
    this.goToCheckOutButton = Selector('[class*="Cart__header"] [class*="primaryCta"] [class*="Button__button"]');
  }
}
