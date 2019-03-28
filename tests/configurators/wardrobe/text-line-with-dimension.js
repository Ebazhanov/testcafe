import config from '../../../config';
import PdpPage from '../../../page-objects/product-details-page';
import WardrobeConfiguratorPage from '../../../page-objects/configurator-pages/wardrobes/configurator-wardrobe-page';

const pdpDetailsPage = new PdpPage();
const wardrobeDetailsPage = new WardrobeConfiguratorPage();
let dimensionPdpPage;

fixture `Wardrobe`
  .page `${ config.baseUrl }/produkt/Qw58NU0n?tab=farben`;

test('Check presence of dimension for PDP page with sliding door', async t => {
  dimensionPdpPage = (await pdpDetailsPage.minCeilingHeightMsg.innerText);
  await t
    .expect(dimensionPdpPage).notEql('');
});

fixture `Wardrobe`
  .page `${ config.baseUrl }/kleiderschrank/Qw58NU0n?tab=masse`;

test('Check presence of dimension for Configuration page with sliding door', async t => {
  const dimensionConfigurationPage = (await wardrobeDetailsPage.minCeilingHeightMsg.innerText);
  await t
    .expect(dimensionConfigurationPage).notEql('')
    .expect(dimensionConfigurationPage).eql(dimensionPdpPage);
});

