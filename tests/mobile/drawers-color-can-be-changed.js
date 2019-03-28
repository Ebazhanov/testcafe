import { ClientFunction } from 'testcafe';
import config from '../../config';
import ConfiguratorTablePage from '../../page-objects/configurator-pages/table/configurator-table-page';
import ConfiguratorPage from '../../page-objects/configurator-pages/configurator-page-with-common-locators';
import ConfiguratorSofaPage from '../../page-objects/configurator-pages/sofa/configurator-sofa-page';

const configuratorTable = new ConfiguratorTablePage();
const configuratorPage = new ConfiguratorPage();
const configuratorSofa = new ConfiguratorSofaPage();

const getSkuRightDrawerTable = ClientFunction(() => {
  return JSON.parse(localStorage['mycs.furniture_table']).structure.front_drawers.right_drawer.drawer_front.sku;
});

fixture `Colors tab`
  .page `${ config.baseUrl }/tisch/Fir7tqo7e?tab=farben`;

test('Colors tab - drawers color can be changed', async t => {
  await t
    .click(configuratorSofa.modulesMenuDropDown.thirdButton)
    .expect(configuratorPage.configurator.loader.exists).notOk()
    .expect(configuratorPage.configurator.image.exists)
    .ok();
  const skuRightDrawerTableBefore = await getSkuRightDrawerTable();
  await t
    .expect(skuRightDrawerTableBefore).eql('301.105.01', 'Sku number is different')
    .click(configuratorTable.configuratorColorTab.leftDrawerLabel)
    .click(configuratorTable.configuratorColorTab.colorMenuOptionsButton)
    .click(configuratorTable.colorsDropDownMenu.colorNumberFour)
    .click(configuratorTable.configuratorColorTab.applyButton);
  const skuRightDrawerTableAfter = await getSkuRightDrawerTable();
  await t
    .expect(skuRightDrawerTableAfter).notEql('301.105.01', 'Sku number was not changed');
});

