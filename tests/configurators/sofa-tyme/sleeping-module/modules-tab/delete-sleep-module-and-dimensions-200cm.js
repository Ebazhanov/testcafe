import { getSku, getStructure } from '../../../../../utils';
import config from '../../../../../config';
import ConfiguratorSofaPage from '../../../../../page-objects/configurator-pages/sofa/configurator-sofa-page';
import SofaJpQueries from '../../../../../page-objects/jp-query/sofa/sofa-jp-queries';

const Sofa = new SofaJpQueries();
const configuratorSofa = new ConfiguratorSofaPage();

fixture `Sleeping module`
  .page `${ config.baseUrl }/sofa-joyn/QiCf9qebU?tab=modules`;

test('Check quantity of legs for armchairs + dimensions not more ~ 200 cm', async t => {
  await t
    .click(configuratorSofa.configuratorModulesTab.fourthLabelOption);
  const structure = await getStructure('joyn')();
  const numbersOfBaseBefore = getSku(structure, Sofa.getAllNumbersOfSkuForBaseModules).length;
  await t
    .expect(numbersOfBaseBefore).eql(2)
    .click(configuratorSofa.deleteModuleOption.deleteButton);
  const structureAfter = await getStructure('joyn')();
  const numbersOfBaseAfter = getSku(structureAfter, Sofa.getAllNumbersOfSkuForBaseModules).length;
  await t
    .expect(numbersOfBaseAfter).eql(1)
    .expect(numbersOfBaseAfter).notEql(numbersOfBaseBefore)
    .expect(configuratorSofa.productDetailsBlock.dimensions.innerText)
    .eql('248 cm');
});
