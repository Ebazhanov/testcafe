import ConfiguratorPage from '../../../page-objects/configurator-pages/configurator-page-with-common-locators';
import { getStructure, getConfiguratorPrice } from '../../../utils';
import config from '../../../config';

const configuratorPage = new ConfiguratorPage();

fixture `Couchtable configurator - Forms tab`;

test.page(`${ config.baseUrl }/couchtisch/piVeIZkg`)(
  'Couchtable can be added', async t => {
    await t
      .expect(configuratorPage.configurator.image.exists).ok()
      .expect(configuratorPage.configurator.loader.exists).notOk();
    const structureBefore = await getStructure('couchtable')();
    const priceBefore = await getConfiguratorPrice();
    await t
      .click(configuratorPage.dropdownButton) // click to open a dropdown with forms for a new table
      .click(configuratorPage.dropdownButtonOptionFirst); // click to select first option
    const structureAfter = await getStructure('couchtable')();
    const priceAfter = await getConfiguratorPrice();
    await t
      .expect(structureAfter.length).gt(structureBefore.length, 'Amount of tables did not increase')
      .expect(priceAfter).gt(priceBefore, 'Price did not increase after adding a table');
  });

test.page(`${ config.baseUrl }/couchtisch/piVeIZkg`)(
  'Couchtable can be deleted', async t => {
    await t
      .expect(configuratorPage.configurator.image.exists).ok()
      .expect(configuratorPage.configurator.loader.exists).notOk();
    const structureBefore = await getStructure('couchtable')();
    const priceBefore = await getConfiguratorPrice();
    await t
      .expect(configuratorPage.labelFirst.exists).ok('Label is not visible')
      .click(configuratorPage.labelFirst) // click on the first label to open dropdown menu
      .click(configuratorPage.dropdownButtonOptionLast); // click on the last option to delete a table
    const structureAfter = await getStructure('couchtable')();
    const priceAfter = await getConfiguratorPrice();
    await t
      .expect(structureAfter.length).lt(structureBefore.length, 'Amount of tables did not decrease after deleting a table')
      .expect(priceAfter).lt(priceBefore, 'Price did not decrease after deleting a table');
  });
