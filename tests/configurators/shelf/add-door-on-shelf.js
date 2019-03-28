import { getStructure } from '../../../utils';
import config from '../../../config';
import ConfiguratorPage from '../../../page-objects/configurator-pages/configurator-page-with-common-locators';
import ConfiguratorShelfPage from '../../../page-objects/configurator-pages/shelf/configurator-shelf-page';

const configuratorPage = new ConfiguratorPage();
const configuratorShelfPage = new ConfiguratorShelfPage();

fixture `Shelf with door`;

test.page(`${ config.baseUrl }/regal/Q-LT86Byj?tab=fronten`)(
  'If there is no board below, then it gets the color of the next board above', async t => {
    await t
      .expect(configuratorPage.configurator.loader.exists).notOk()
      .expect(configuratorPage.configurator.image.exists).ok()
      .click(configuratorShelfPage.dropdownButton); // Click on plus button to select door type
    await t
      .click(configuratorShelfPage.dropdownButtonOptionSecond) // Click on select middle size door button
      .expect(configuratorShelfPage.labelAddSecond.exists).ok()
      .click(configuratorShelfPage.labelAddSecond) // Click on the plus icon to select second board
      .click(configuratorShelfPage.applyButton); // Click on Apply button to save changes
    const structureAfter = await getStructure('shelf')();
    await t
      .expect(structureAfter.columns[0].boards[0].sku).eql(structureAfter.columns[0].boards[1].sku);
  });

test.page(`${ config.baseUrl }/regal/p-qYXIrLv?tab=fronten`)(
  'Boards of new door takes color from boards below', async t => {
    await t
      .expect(configuratorPage.configurator.loader.exists).notOk()
      .expect(configuratorPage.configurator.image.exists).ok()
      .click(configuratorShelfPage.dropdownButton); // Click on plus button to select door type
    await t
      .click(configuratorShelfPage.dropdownButtonOptionFirst) // Click on select small size door button
      .expect(configuratorShelfPage.labelAddSeventh.exists).ok()
      .click(configuratorShelfPage.labelAddSeventh) // Click on the plus icon to select third label in second column
      .click(configuratorShelfPage.applyButton); // Click on Apply button to save changes
    const structureAfter = await getStructure('shelf')();
    await t
      .expect(structureAfter.columns[1].boards[1].sku).eql(structureAfter.columns[1].boards[2].sku);
  });

