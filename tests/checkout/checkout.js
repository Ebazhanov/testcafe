import { Selector } from 'testcafe';
import config from '../../config';
import CartPage from '../../page-objects/shopping-cart-page';
import AddressPage from '../../page-objects/foxy-card-pages/fc-address-page';
import PaymentMethodPage from '../../page-objects/foxy-card-pages/fc-payment-method-page';
import ConfirmationPage from '../../page-objects/foxy-card-pages/fc-confirmation-page';
import { getUniqueEmail } from '../../utils';

const cart_page = new CartPage();
const address_page = new AddressPage();
const payment_method_page = new PaymentMethodPage();
const confirmation_page = new ConfirmationPage();


fixture `Checkout table`
  .page `${ config.baseUrl }/warenkorb?uuid=FiR4Yr__`;

test('Checkout', async t => {
  await t
    .click(cart_page.goToCheckOutButton)
    .typeText(address_page.emailField, getUniqueEmail())
    .click(address_page.titleDropDown)
    .click(Selector('option').withText('Frau'))
    .typeText(address_page.firstNameField, 'First Name')
    .typeText(address_page.surnameNameField, 'Last Name')
    .typeText(address_page.birthdayField, '1999/02/02')
    .typeText(address_page.companyNameField, 'Company name')
    .typeText(address_page.phoneNumberField, '123123123123123')
    .typeText(address_page.streetField, 'Street name')
    .typeText(address_page.houseNumberField, 'House number field')
    .typeText(address_page.postField, '12345')
    .typeText(address_page.cityField, 'City name')
    .click(address_page.continueButton)
    .wait(3000)
    .click(payment_method_page.nextButton)
    .click(confirmation_page.acceptTermsOfUseCheckBox)
    .click(confirmation_page.submitButton);
});
