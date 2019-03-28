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

test('Check ability to combine available Basic-Module together with sleeping module', async t => {
  await t
    .expect(configuratorPage.configurator.loader.exists)
    .notOk()
    .expect(configuratorPage.configurator.image.exists)
    .ok()
    .click(configuratorSofa.configuratorModulesTab.fistLabelOption)
    .click(configuratorSofa.baseModulesOption.firstModule);
  const structureWith80cm = await getStructure('joyn')();
  const skuNumbersWith80cm = getSku(structureWith80cm, Sofa.getSkuOfExtentionForBaseModule).length;
  await t
    .expect(skuNumbersWith80cm).eql(1)
    .hover(configuratorSofa.configuratorModulesTab.fourthLabelOption)
    .click(configuratorSofa.configuratorModulesTab.fourthLabelOption)
    .click(configuratorSofa.baseModulesOption.secondModule);
  const structureWith120cm = await getStructure('joyn')();
  const skuNumbersWith120cm = getSku(structureWith120cm, Sofa.getSkuOfExtentionForBaseModule);
  await t
    .hover(configuratorSofa.configuratorModulesTab.fourthLabelOption)
    .click(configuratorSofa.configuratorModulesTab.fourthLabelOption)
    .click(configuratorSofa.baseModulesOption.thirdModule);
  const structureWith160cm = await getStructure('joyn')();
  const skuNumbersWith160cm = getSku(structureWith160cm, Sofa.getSkuOfExtentionForBaseModule);
  await t
    .expect(skuNumbersWith160cm).notEql(skuNumbersWith120cm)
    .hover(configuratorSofa.configuratorModulesTab.fourthLabelOption)
    .click(configuratorSofa.configuratorModulesTab.fourthLabelOption)
    .click(configuratorSofa.baseModulesOption.fourthModule);
  const structureWith200cm = await getStructure('joyn')();
  const skuNumbersWith200cm = getSku(structureWith200cm, Sofa.getSkuOfExtentionForBaseModule);
  await t
    .expect(skuNumbersWith160cm).notEql(skuNumbersWith200cm);
});
