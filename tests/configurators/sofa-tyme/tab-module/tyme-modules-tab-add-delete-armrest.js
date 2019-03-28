import { ClientFunction } from 'testcafe';
import config from '../../../../config';
import Page from '../../../../page-objects/configurator-pages/sofa/joyn-conf-modules';

const page = new Page();

const getStructure = ClientFunction(() => JSON.stringify(JSON.parse(localStorage['mycs.furniture_joyn']).structure));

fixture `Joyn Modules Tab`
  .page `${ config.baseUrl }/sofa-joyn/Q-AiOIo2X?mx-notrack`;

test('Armrest can be deleted and added', async t => {
  await t
    .click(page.firstArmEditLabel)
    .click(page.delete);
  const structure = await getStructure();
  await t
    .click(page.addArmLabel)
    .click(page.smallArm);
  const structureAfter = await getStructure();
  await t
    .expect(structure).notEql(structureAfter, 'Structure have not changed');
});
