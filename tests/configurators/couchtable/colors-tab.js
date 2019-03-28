import ConfiguratorPage from '../../../page-objects/configurator-pages/configurator-page-with-common-locators';
import { getStructure } from '../../../utils';
import config from '../../../config';

const configuratorPage = new ConfiguratorPage();

fixture `Couchtable configurator - Colors tab`;

test.page(`${ config.baseUrl }/couchtisch/piVeIZkg?tab=farben`)(
  'Couchtable can be colored whole', async t => {
    await t
      .expect(configuratorPage.configurator.image.exists).ok()
      .expect(configuratorPage.configurator.loader.exists).notOk();
    const structureBefore = await getStructure('couchtable')();
    await t
      .click(configuratorPage.dropdownButton)
      .click(configuratorPage.dropdownButtonOptionFirst)
      .click(configuratorPage.selectAllButton)
      .click(configuratorPage.applyButton);
    const structureAfter = await getStructure('couchtable')();
    await t
      .expect(structureAfter[0].ctop.sku)
      .notEql(structureBefore[0].ctop.sku, 'Tabletop sku was not changed after changing color')
      .expect(structureAfter[0].clegs.back.sku)
      .notEql(structureBefore[0].clegs.back.sku, 'Table back legs sku was not changed after changing color')
      .expect(structureAfter[0].clegs.back.sku)
      .eql(structureAfter[0].clegs.front_left.sku, 'Table back and front left legs sku were changed')
      .expect(structureAfter[0].clegs.front_left.sku)
      .eql(structureAfter[0].clegs.front_right.sku, 'Table front left and right legs sku were changed');
  });

test.page(`${ config.baseUrl }/couchtisch/piVeIZkg?tab=farben`)(
  'Couchtable elements can be colored', async t => {
    await t
      .expect(configuratorPage.configurator.image.exists).ok()
      .expect(configuratorPage.configurator.loader.exists).notOk();
    const structureBefore = await getStructure('couchtable')();
    await t
      .expect(configuratorPage.labelFirst.exists).ok('Label is not visible')
      .click(configuratorPage.labelFirst) // We click on the table top label
      .click(configuratorPage.labelFourth) // We click on the front right table leg
      .click(configuratorPage.dropdownButton)
      .click(configuratorPage.dropdownButtonOptionFirst)
      .click(configuratorPage.applyButton);
    const structureAfter = await getStructure('couchtable')();
    await t
      .expect(structureAfter[0].ctop.sku)
      .notEql(structureBefore[0].ctop.sku, 'Tabletop color was not changed!')
      .expect(structureAfter[0].clegs.back.sku)
      .notEql(structureBefore[0].clegs.back.sku, 'Table front right legs color was not changed!')
      .expect(structureAfter[0].clegs.front_right.sku)
      .eql(structureBefore[0].clegs.front_right.sku, 'Table back legs were changed!')
      .expect(structureAfter[0].clegs.front_left.sku)
      .eql(structureBefore[0].clegs.front_left.sku, 'Table front left legs were changed!');
  });
