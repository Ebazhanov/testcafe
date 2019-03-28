/* Feature introduced in MYCS-7480 */
import config from '../../config';
import ProductPage from '../../page-objects/product-details-page';
import ConfiguratorPage from '../../page-objects/configurator-pages/configurator-page-with-common-locators';
import ShelfConfiguratorPage from '../../page-objects/configurator-pages/shelf/shelf-configurator-page';

const productPage = new ProductPage();
const configuratorPage = new ConfiguratorPage();
const shelfConfiguratorPage = new ShelfConfiguratorPage();

fixture `Ceiling height message`
  .page `${ config.baseUrl }/produkt/Qw6FJkIFj?mx-notrack`;

test('Message is shown for shelves that are taller than 200cm', async t => {
  await t
    .expect(productPage.minCeilingHeightMsg.exists).ok('Min ceiling height message exists on PDP');
  const messageOnPDP = await productPage.minCeilingHeightMsg.innerText;
  await t
    .expect(productPage.configuratorLink.exists).ok()
    .click(productPage.configuratorLink)
    .expect(configuratorPage.productDetails.minCeilingHeightMsg.exists)
    .ok('Min ceiling height message exists under configurator')
    .expect(configuratorPage.productDetails.minCeilingHeightMsg.innerText)
    .eql(messageOnPDP, 'Message is the same as on PDP');
});

test.page(`${ config.baseUrl }/produkt/FwjFGGJM?mx-notrack`)(
  'No message on PDP for a shelf < 195cm height', async t => {
    await t
      .expect(productPage.infoBlockWithSpecs.exists)
      .ok('Info block with specs loaded')
      .expect(productPage.minCeilingHeightMsg.exists)
      .notOk('Min ceiling height message does not exists on PDP for a shelf < 195cm height', { timeout: 0 });
  }
);

test.page(`${ config.baseUrl }/regal/Qw6FJkIFj?mx-notrack`)(
  'Message disappear under configurator if a shelf height changes to 195cm', async t => {
    await t
      .expect(configuratorPage.configurator.image.exists)
      .ok('Configurator image loaded')
      .expect(configuratorPage.configurator.loader.exists)
      .notOk('Loader disappeared')
      .expect(configuratorPage.productDetails.minCeilingHeightMsg.exists)
      .ok('Min ceiling height message exists under configurator')
      .click(shelfConfiguratorPage.dimensionsTab.heightDropdownButton)
      .dragToElement(shelfConfiguratorPage.dimensionsTab.sliderDropdownStepNr7, shelfConfiguratorPage.dimensionsTab.sliderDropdownStepNr6)
      .click(shelfConfiguratorPage.dimensionsTab.sliderDropdownApplyButton)
      .expect(configuratorPage.configurator.loader.exists)
      .notOk('Loader disappeared')
      .expect(configuratorPage.productDetails.minCeilingHeightMsg.exists)
      .notOk('Min ceiling height message disappeared under configurator');
  }
);
