import { getStructure, getSku } from '../../../../../utils';
import config from '../../../../../config';
import ConfiguratorSofaPage from '../../../../../page-objects/configurator-pages/sofa/configurator-sofa-page';
import ConfiguratorPage from '../../../../../page-objects/configurator-pages/configurator-page-with-common-locators';
import SofaJpQueries from '../../../../../page-objects/jp-query/sofa/sofa-jp-queries';

const Sofa = new SofaJpQueries();
const configuratorSofa = new ConfiguratorSofaPage();
const configuratorPage = new ConfiguratorPage();

fixture `Sleeping module`
  .page `${ config.baseUrl }/sofa-joyn/ziqX5Y-PU?tab=farben`;

test('Change color for base back and main cushion', async t => {
  await t
    .expect(configuratorPage.configurator.image.exists)
    .ok('Configurator image loaded')
    .expect(configuratorPage.configurator.loader.exists)
    .notOk('Loader disappeared');

  const structureBefore = await getStructure('joyn')();
  const skuOfShapeForMainBedBefore = getSku(structureBefore, Sofa.getShapeSkuForMainBed);
  const skuOfCushionForBaseBefore = getSku(structureBefore, Sofa.getCushionSkuForBaseModule);

  await t
    .click(configuratorSofa.configuratorColorTab.moduleMenuButton)
    .click(configuratorSofa.modulesMenuDropDown.secondButton)
    .click(configuratorSofa.configuratorColorTab.materialsAndColorsMenuButton)
    .click(configuratorSofa.colorsDropDownMenu.colorNr8)
    .expect(configuratorPage.configurator.loader.exists)
    .notOk('Loader disappeared');
  const structureAfter = await getStructure('joyn')();
  const skuOfShapeForMainBedAfter = getSku(structureAfter, Sofa.getShapeSkuForMainBed);
  const skuOfCushionForBaseAfter = getSku(structureAfter, Sofa.getCushionSkuForBaseModule);
  await t
    .expect(skuOfShapeForMainBedBefore).notEql(skuOfShapeForMainBedAfter)
    .expect(skuOfCushionForBaseBefore).notEql(skuOfCushionForBaseAfter);
});
