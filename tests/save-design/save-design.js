import config from '../../config';
import { getUniqueEmail, getLastSavedDesign, getDataLayerSaveDesignEvent } from '../../utils';
import Page from '../../page-objects/product-details-page';

const page = new Page();

fixture `Save Design`
  .page `${ config.baseUrl }/produkt/QwNJekFpU?mx-notrack`;

test('Save design from Product Details Page', async t => {
  await t
    .click(page.saveDesignInfoBlock)
    .typeText(page.emailInput, getUniqueEmail())
    .click(page.saveDesignSubmitButton);

  const lastSavedDesign = await getLastSavedDesign();
  await t
    .expect(lastSavedDesign.uuid).ok('Last saved design is in FC.json')
    .expect(lastSavedDesign.uuid).eql('QwNJekFpU', 'UUID the same as in URL');

  const saveDesignEvent = await getDataLayerSaveDesignEvent();
  await t
    .expect(saveDesignEvent).ok('"saveDesignSent" event is in GA dataLayer');
});
