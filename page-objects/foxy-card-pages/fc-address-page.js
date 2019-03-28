import { Selector } from 'testcafe';

export default class AddressPage {
  constructor() {
    this.emailField = Selector('[name="customer_email"]');
    this.firstNameField = Selector('[name="shipping_first_name"]');
    this.surnameNameField = Selector('[name="shipping_last_name"]');
    this.birthdayField = Selector('[name="birthday"]');
    this.companyNameField = Selector('[name="shipping_company"]');
    this.phoneNumberField = Selector('[name="shipping_phone"]');
    this.streetField = Selector('[name="shipping_address1"]');
    this.houseNumberField = Selector('[name="shipping_address2"]');
    this.postField = Selector('[name="shipping_postal_code"]');
    this.cityField = Selector('[name="shipping_city"]');
    this.titleDropDown = Selector('[name="address_form"] div:nth-child(3) div:nth-child(2) [class*="Select__iconWrap"]');
    this.continueButton = Selector('[name="address_form"] [type="submit"] span');
    this.submitButton = Selector('.fc-button.fc-button--submit span');
  }
}
