import { getSku, getStructure } from '../../../../../utils';
import config from '../../../../../config';
import ConfiguratorSofaPage from '../../../../../page-objects/configurator-pages/sofa/configurator-sofa-page';
import SofaJpQueries from '../../../../../page-objects/jp-query/sofa/sofa-jp-queries';

const Sofa = new SofaJpQueries();
const configuratorSofa = new ConfiguratorSofaPage();

fixture `Sleeping module`
  .page `${ config.baseUrl }/sofa-joyn/QH3yRO3pU?tab=modules`;

test('Check that after adding sleep module > Armrest attached by default', async t => {
  await t
    .click(configuratorSofa.configuratorModulesTab.thirdLabelOption);
  const structure = await getStructure('joyn')();
  const numbersOfArmrestBefore = getSku(structure, Sofa.getAllSkuNumbersForArmrests).length;
  await t
    .expect(numbersOfArmrestBefore).eql(1)
    .click(configuratorSofa.baseModulesOption.fifthModule);
  const structureAfter = await getStructure('joyn')();
  const numbersOfArmrestAfter = getSku(structureAfter, Sofa.getAllSkuNumbersForArmrests).length;
  await t
    .expect(numbersOfArmrestAfter).eql(2);
});
