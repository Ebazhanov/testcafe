import config from '../../config';
import { getUniqueEmail, getLastSavedDesign, getDataLayerSaveDesignEvent } from '../../utils';
import ProductPage from '../../page-objects/product-details-page';
import ConfiguratorPage from '../../page-objects/configurator-pages/configurator-page-with-common-locators';

const productPage = new ProductPage();
const configuratorPage = new ConfiguratorPage();

fixture `Save Design`
  .page `${ config.baseUrl }/produkt/QwNJekFpU?mx-notrack`;

test('Save design from Product Details Page', async t => {
  await t
    .expect(configuratorPage.closeButton.exists).ok()
    .hover(configuratorPage.closeButton)
    .click(configuratorPage.closeButton)
    .hover(productPage.saveDesignInfoBlock)
    .click(productPage.saveDesignInfoBlock)
    .typeText(productPage.emailInput, getUniqueEmail())
    .pressKey('esc')
    .hover(productPage.saveDesignSubmitButton)
    .click(productPage.saveDesignSubmitButton);
  const lastSavedDesign = await getLastSavedDesign();
  await t
    .expect(lastSavedDesign.uuid).ok('Last saved design is in FC.json')
    .expect(lastSavedDesign.uuid).eql('QwNJekFpU', 'UUID the same as in URL');
  const saveDesignEvent = await getDataLayerSaveDesignEvent();
  await t
    .expect(saveDesignEvent).ok('"saveDesignSent" event is in GA dataLayer');
});
