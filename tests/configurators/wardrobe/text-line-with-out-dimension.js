import config from '../../../config';
import PdpPage from '../../../page-objects/product-details-page';
import WardrobeConfiguratorPage from '../../../page-objects/configurator-pages/wardrobes/configurator-wardrobe-page';

const pdpDetailsPage = new PdpPage();
const wardrobeDetailsPage = new WardrobeConfiguratorPage();

fixture `Wardrobes`
  .page `${ config.baseUrl }/produkt/Q-cfqIROe?tab=masse`;

test('Check presence of dimension for PDP page withOUT sliding door', async t => {
  await t
    .expect(pdpDetailsPage.minCeilingHeightMsg.exists).notOk();
});

fixture `Wardrobes`
  .page `${ config.baseUrl }/kleiderschrank/Q-cfqIROe?tab=masse`;

test('Check presence of dimension for Configuration page withOUT sliding door', async t => {
  await t
    .expect(wardrobeDetailsPage.minCeilingHeightMsg.exists).notOk();
});

