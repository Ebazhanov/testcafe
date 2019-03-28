import config from '../../../config';
import ConfiguratorTablePage from '../../../page-objects/configurator-pages/table/configurator-table-page';
import ConfiguratorPage from '../../../page-objects/configurator-pages/configurator-page-with-common-locators';
import { getStructure } from '../../../utils';

const configuratorTable = new ConfiguratorTablePage();
const configuratorPage = new ConfiguratorPage();

// Tests: Drawer, extension, frame, leg, table top, the whole table colours can be changed
// TO DO: to write tests for each module that they can be coloured all at once, ex: legs can be coloured all at once.

fixture `Table configurator - Colors tab`;

test.page(`${ config.baseUrl }/tisch/Fir7tqo7e?tab=farben`)(
  'Drawers color can be changed', async t => {
    await t
      .expect(configuratorPage.configurator.image.exists).ok()
      .expect(configuratorPage.configurator.loader.exists).notOk()
      .click(configuratorPage.dropdownButtonOptionThird); // Click to select drawers module
    const structureBefore = await getStructure('table')();
    await t
      .expect(configuratorTable.labelDrawerLeft.exists).ok('Label is not visible')
      .click(configuratorTable.labelDrawerLeft) // Click on the left drawer
      .click(configuratorPage.dropdownButtonSecond) // Click to open Colors options
      .click(configuratorPage.dropdownButtonOptionThird) // Select third colour option from the dropdown menu
      .click(configuratorPage.applyButton); // Confirm changes
    const structureAfter = await getStructure('table')();
    await t
      .expect(structureBefore.front_drawers.left_drawer.drawer_front.sku).notEql(structureAfter.front_drawers.left_drawer.drawer_front.sku,
        'Drawer sku was not changed after changing a colour');
  });

test.page(`${ config.baseUrl }/tisch/zHoBXyi0e?tab=farben`)(
  'Extension color can be changed', async t => {
    await t
      .expect(configuratorPage.configurator.image.exists).ok()
      .expect(configuratorPage.configurator.loader.exists).notOk()
      .click(configuratorPage.dropdownButtonOptionFirst); // Click to select Top&Extensions module from dropdown menu
    const structureBefore = await getStructure('table')();
    await t
      .expect(configuratorTable.labelExtensionLeft.exists).ok('Label is not visible')
      .click(configuratorTable.labelExtensionLeft) // Click on the label to select extension
      .click(configuratorPage.dropdownButtonSecond) // Click on Colour and Materials button to open dropdown menu
      .click(configuratorPage.dropdownButtonOptionThird) // Select third color from dropdown menu
      .click(configuratorPage.applyButton); // Confirm changes
    const structureAfter = await getStructure('table')();
    await t
      .expect(structureBefore.extensions.left.sku).notEql(structureAfter.extensions.left.sku, 'Extension sku was not changed after changing a colour');
  });

test.page(`${ config.baseUrl }/tisch/z-s6pHyM?tab=farben`)(
  'Frame color can be changed', async t => {
    await t
      .expect(configuratorPage.configurator.image.exists).ok()
      .expect(configuratorPage.configurator.loader.exists).notOk()
      .click(configuratorPage.dropdownButtonOptionFourth); // Click to select Frames module from dropdown menu
    const structureBefore = await getStructure('table')();
    await t
      .expect(configuratorTable.labelFrameRight.exists).ok('Label is not visible')
      .click(configuratorTable.labelFrameRight) // Click on the label to select frame
      .click(configuratorPage.dropdownButtonSecond) // Click on Colour and Materials button to open dropdown menu
      .click(configuratorPage.dropdownButtonOptionThird) // Select third color from dropdown menu
      .click(configuratorPage.applyButton); // Confirm changes
    const structureAfter = await getStructure('table')();
    await t
      .expect(structureBefore.frames.right.sku).notEql(structureAfter.frames.right.sku, 'Frame sku was not changed after changing a colour')
      .expect(structureAfter.frames.right.sku).notEql(structureAfter.frames.left.sku, 'Frame were not coloured individually');
  });

test.page(`${ config.baseUrl }/tisch/C-I2cyv6?tab=farben`)(
  'Legs color can be changed', async t => {
    await t
      .expect(configuratorPage.configurator.image.exists).ok()
      .expect(configuratorPage.configurator.loader.exists).notOk()
      .click(configuratorPage.dropdownButtonOptionSecond); // Click to select Legs module from dropdown menu
    const structureBefore = await getStructure('table')();
    await t
      .expect(configuratorTable.labelLegFrontLeft.exists).ok('Label is not visible')
      .click(configuratorTable.labelLegFrontLeft) // Click on the label to select leg
      .click(configuratorPage.dropdownButtonSecond) // Click on Colour and Materials button to open dropdown menu
      .click(configuratorPage.dropdownButtonOptionThird) // Select third color from dropdown menu
      .click(configuratorPage.applyButton); // Confirm changes
    const structureAfter = await getStructure('table')();
    await t
      .expect(structureBefore.legs.front_left.sku).notEql(structureAfter.legs.front_left.sku, 'Leg sku was not changed after changing the colour')
      .expect(structureAfter.legs.front_left.sku).notEql(structureAfter.legs.front_right.sku, 'Leg was not coloured individually');
  });

test.page(`${ config.baseUrl }/tisch/Fir7tqo7e?tab=farben`)(
  'Table top can be coloured', async t => {
    await t
      .expect(configuratorPage.configurator.image.exists).ok()
      .expect(configuratorPage.configurator.loader.exists).notOk()
      .click(configuratorPage.dropdownButtonOptionFirst); // Click to select Table Top module from dropdown menu
    const structureBefore = await getStructure('table')();
    await t
      .click(configuratorPage.dropdownButtonSecond) // Click on Colour and Materials button to open dropdown menu
      .click(configuratorPage.dropdownButtonOptionThird) // Select third color from dropdown menu
      .click(configuratorPage.applyButton); // Confirm changes
    const structureAfter = await getStructure('table')();
    await t
      .expect(structureBefore.tops.tabletop.sku).notEql(structureAfter.tops.tabletop.sku, 'Top sku was not changed after changing a colour');
  });

test.page(`${ config.baseUrl }/tisch/Fir7tqo7e?tab=farben`)(
  'Whole table can be coloured', async t => {
    await t
      .expect(configuratorPage.configurator.image.exists).ok()
      .expect(configuratorPage.configurator.loader.exists).notOk()
      .click(configuratorPage.dropdownButtonOptionFourth); // Click to select the Whole Table module from dropdown menu
    const structureBefore = await getStructure('table')();
    await t
      .click(configuratorPage.dropdownButtonSecond) // Click on Colour and Materials button to open dropdown menu
      .click(configuratorPage.dropdownButtonOptionThird) // Select third color from dropdown menu
      .click(configuratorPage.applyButton); // Confirm changes
    const structureAfter = await getStructure('table')();
    await t
      .expect(structureBefore.front_drawers.left_drawer.drawer_front.sku).notEql(structureAfter.front_drawers.left_drawer.drawer_front.sku,
        'Drawer sku was not changed after changing a colour')
      .expect(structureBefore.legs.front_left.sku).notEql(structureAfter.legs.front_left.sku, 'Leg sku was not changed after changing a colour')
      .expect(structureBefore.tops.tabletop.sku)
      .notEql(structureAfter.tops.tabletop.sku, 'Top sku was not changed after changing a colour');
  });
