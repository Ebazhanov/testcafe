import { getSku, getStructure } from '../../../../../utils';
import config from '../../../../../config';
import ConfiguratorSofaPage from '../../../../../page-objects/configurator-pages/sofa/configurator-sofa-page';
import ConfiguratorPage from '../../../../../page-objects/configurator-pages/configurator-page-with-common-locators';
import SofaJpQueries from '../../../../../page-objects/jp-query/sofa/sofa-jp-queries';

const Sofa = new SofaJpQueries();
const configuratorSofa = new ConfiguratorSofaPage();
const configuratorPage = new ConfiguratorPage();

fixture `Sleeping module`
  .page `${ config.baseUrl }/sofa-joyn/zwVsBovs9?tab=modules`;

test('Change all type of legs for sleeping sofa', async t => {
  await t
    .click(configuratorPage.headerMenuTabs.secondTab)
    .click(configuratorSofa.legsType.classicButton)
    .expect(configuratorPage.configurator.image.exists).ok();
  const structureWithClassicType = await getStructure('joyn')();
  const skusOfLegsWithClassicType = getSku(structureWithClassicType, Sofa.getNumbersOfLegsForArmrest);
  await t
    .click(configuratorSofa.legsType.cyrcleButton)
    .expect(configuratorPage.configurator.image.exists).ok();
  const structureWithCyrcleType = await getStructure('joyn')();
  const skusOfLegsWithCyrcleType = getSku(structureWithCyrcleType, Sofa.getNumbersOfLegsForArmrest);
  await t
    .expect(skusOfLegsWithCyrcleType).notEql(skusOfLegsWithClassicType);
  await t
    .click(configuratorSofa.legsType.nordycButton)
    .expect(configuratorPage.configurator.image.exists).ok();
  const structureWithNordycType = await getStructure('joyn')();
  const skusOfLegsWithNordycType = getSku(structureWithNordycType, Sofa.getNumbersOfLegsForArmrest);
  await t
    .expect(skusOfLegsWithNordycType).notEql(skusOfLegsWithCyrcleType);
});
