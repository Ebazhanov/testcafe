import { getSku, getStructure } from '../../../../../utils';
import config from '../../../../../config';
import ConfiguratorSofaPage from '../../../../../page-objects/configurator-pages/sofa/configurator-sofa-page';
import SofaJpQueries from '../../../../../page-objects/jp-query/sofa/sofa-jp-queries';

const Sofa = new SofaJpQueries();
const configuratorSofa = new ConfiguratorSofaPage();

fixture `Sleeping module`
  .page `${ config.baseUrl }/sofa-joyn/zwVsBovs9?tab=modules`;

test('Check ability to combine all available Edges modules together with sleeping module', async t => {
  await t
    .click(configuratorSofa.configuratorModulesTab.fifthLabelOption)
    .click(configuratorSofa.edgesModulesOptionInPopup.firstModule);
  const structureWith120cm = await getStructure('joyn')();
  const skuNumbersWith120cm = getSku(structureWith120cm, Sofa.getAllExistingSkusForBaseModules).length;
  await t
    .expect(skuNumbersWith120cm).eql(2)
    .click(configuratorSofa.configuratorModulesTab.fourthLabelOption)
    .click(configuratorSofa.edgesModulesOptionInPopup.secondModule);
  const structureWith160cm = await getStructure('joyn')();
  const skuNumbersWith160cm = getSku(structureWith160cm, Sofa.getAllExistingSkusForBaseModules);
  await t
    .expect(skuNumbersWith160cm).notEql(skuNumbersWith120cm)
    .hover(configuratorSofa.configuratorModulesTab.fourthLabelOption)
    .click(configuratorSofa.configuratorModulesTab.fourthLabelOption)
    .click(configuratorSofa.edgesModulesOptionInPopup.thirdModule);
  const structureWith200cm = await getStructure('joyn')();
  const skuNumbersWith200cm = getSku(structureWith200cm, Sofa.getAllExistingSkusForBaseModules);
  await t
    .expect(skuNumbersWith200cm).notEql(skuNumbersWith160cm);
});
