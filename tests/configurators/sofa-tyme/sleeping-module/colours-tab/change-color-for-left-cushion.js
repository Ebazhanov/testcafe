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

test('Change color for left cushion', async t => {
  await t
    .click(configuratorPage.headerMenuTabs.thirdTab)
    .expect(configuratorPage.configurator.loader.exists)
    .notOk()
    .expect(configuratorPage.configurator.image.exists)
    .ok()
    .hover(configuratorSofa.configuratorColorTab.moduleMenuButton)
    .click(configuratorSofa.configuratorColorTab.moduleMenuButton)
    .expect(configuratorPage.configurator.loader.exists)
    .notOk()
    .expect(configuratorSofa.configuratorColorTab.moduleMenuPopup)
    .ok()
    .click(configuratorSofa.modulesMenuDropDown.firstOption)
    .click(configuratorSofa.configuratorColorTab.thirdLabel);
  const structureBefore = await getStructure('joyn')();
  const leftCushionSkuBefore = getSku(structureBefore, Sofa.getLeftCushionSku);
  await t
    .click(configuratorSofa.configuratorColorTab.materialsAndColorsMenuButton)
    .click(configuratorSofa.colorsDropDownMenu.colorNr8)
    .click(configuratorSofa.configuratorColorTab.applyButton);
  const structureAfter = await getStructure('joyn')();
  const leftCushionSkuAfter = getSku(structureAfter, Sofa.getLeftCushionSku);
  const rightCushionSku = getSku(structureAfter, Sofa.getRightCushionSku);
  await t
    .expect(leftCushionSkuBefore).notEql(leftCushionSkuAfter)
    .expect(rightCushionSku).notEql(leftCushionSkuAfter);
});
