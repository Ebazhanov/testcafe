import { getStructure, getSku } from '../../../../../utils';
import config from '../../../../../config';
import ConfiguratorSofaPage from '../../../../../page-objects/configurator-pages/sofa/configurator-sofa-page';
import SofaJpQueries from '../../../../../page-objects/jp-query/sofa/sofa-jp-queries';

const Sofa = new SofaJpQueries();
const configuratorSofa = new ConfiguratorSofaPage();

fixture `Sleeping module`
  .page `${ config.baseUrl }/sofa-joyn/zwVsBovs9?tab=modules`;

test('Check that sleeping module has no legs', async t => {
  await t
    .click(configuratorSofa.configuratorModulesTab.fifthLabelOption)
    .expect(configuratorSofa.baseModulesOption.fifthModule.innerText).eql('200 cm Schlafmodul')
    .click(configuratorSofa.baseModulesOption.fifthModule);
  const structure = await getStructure('joyn')();
  const numbersOfLegsForArmrest = getSku(structure, Sofa.getNumbersOfLegsForArmrest).length;
  const numbersOfSleepingModules = getSku(structure, Sofa.getNumbersOfSleepingModules).length;
  const numbersOfLegsForSleepingModules = getSku(structure, Sofa.getNumbersOfLegsForSleepingModules).toString();
  await t
    .expect(numbersOfLegsForArmrest).eql(4)
    .expect(numbersOfSleepingModules).eql(2)
    .expect(numbersOfLegsForSleepingModules)
    .eql(',,,');
});
