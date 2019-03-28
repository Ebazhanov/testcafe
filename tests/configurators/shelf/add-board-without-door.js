import { getStructure } from '../../../utils';
import config from '../../../config';
import ConfiguratorPage from '../../../page-objects/configurator-pages/configurator-page-with-common-locators';
import ConfiguratorShelfPage from '../../../page-objects/configurator-pages/shelf/configurator-shelf-page';

const configuratorPage = new ConfiguratorPage();
const configuratorShelfPage = new ConfiguratorShelfPage();

fixture `Shelf`;

test.page(`${ config.baseUrl }/regal/p-qYXIrLv?tab=boeden`)(
  'When I add boards on the board tab, they should also be the color of the closest board below it', async t => {
    await t
      .expect(configuratorPage.configurator.loader.exists).notOk()
      .expect(configuratorPage.configurator.image.exists).ok();
    await t
      .expect(configuratorShelfPage.labelAddForth.exists).ok()
      .click(configuratorShelfPage.labelAddForth) // Click on the plus icon to select forth board
      .click(configuratorShelfPage.applyButton); // Click on Apply button to save changes
    const structureAfter = await getStructure('shelf')();
    await t
      .expect(structureAfter.columns[1].boards[1].sku).eql(structureAfter.columns[1].boards[2].sku);
  });

test.page(`${ config.baseUrl }/regal/Q-LT86Byj?tab=boeden`)(
  'If there is no board below at all, then it gets the color of the next board above.', async t => {
    await t
      .expect(configuratorPage.configurator.loader.exists).notOk()
      .expect(configuratorPage.configurator.image.exists).ok();
    await t
      .expect(configuratorShelfPage.labelAddThird.exists).ok()
      .click(configuratorShelfPage.labelAddThird) // Click on the plus icon to select third board
      .click(configuratorShelfPage.applyButton); // Click on Apply button to save changes
    const structureAfter = await getStructure('shelf')();
    await t
      .expect(structureAfter.columns[0].boards[1].sku).eql(structureAfter.columns[0].boards[0].sku);
  });

