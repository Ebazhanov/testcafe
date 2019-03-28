import { getStructure } from '../../../utils';
import ConfiguratorPage from '../../../page-objects/configurator-pages/configurator-page-with-common-locators';
import config from '../../../config';

const configuratorPage = new ConfiguratorPage();

fixture `Couchtable configurator - Height tab`;

test.page(`${ config.baseUrl }/couchtisch/piVeIZkg?tab=hoehen`)(
  'Height can be changed', async t => {
    await t
      .expect(configuratorPage.configurator.image.exists).ok()
      .expect(configuratorPage.configurator.loader.exists).notOk();
    const structureBefore = await getStructure('couchtable')();
    await t
      .expect(configuratorPage.labelFirst.exists).ok('Label is not visible')
      .click(configuratorPage.labelFirst)
      .click(configuratorPage.labelDropdownOptionFirst); // changed the height
    const structureAfter = await getStructure('couchtable')();
    await t
      .expect(structureBefore[0].clegs.back.sku).notEql(structureAfter[0].clegs.back.sku, 'the leg sku was not changed');
  });
