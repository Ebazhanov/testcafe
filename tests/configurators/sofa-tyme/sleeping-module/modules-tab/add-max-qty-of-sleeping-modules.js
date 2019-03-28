import { getSku, getStructure } from '../../../../../utils';
import config from '../../../../../config';
import ConfiguratorSofaPage from '../../../../../page-objects/configurator-pages/sofa/configurator-sofa-page';
import SofaJpQueries from '../../../../../page-objects/jp-query/sofa/sofa-jp-queries';

const Sofa = new SofaJpQueries();
const configuratorSofa = new ConfiguratorSofaPage();

fixture `Sleeping module`
  .page `${ config.baseUrl }/sofa-joyn/zwVsBovs9?tab=modules`;

test('Check that user reach ability to add sleep modules', async t => {
  await t
    .click(configuratorSofa.configuratorModulesTab.fifthLabelOption)
    .click(configuratorSofa.baseModulesOption.fifthModule)
    .click(configuratorSofa.configuratorModulesTab.sixthLabelOption)
    .click(configuratorSofa.baseModulesOption.fifthModule)
    .click(configuratorSofa.configuratorModulesTab.seventhLabelOption)
    .click(configuratorSofa.baseModulesOption.fifthModule)
    .click(configuratorSofa.configuratorModulesTab.eighthLabelOption)
    .expect(configuratorSofa.baseModulesOption.fifthModuleIsNotClickable)
    .ok()
    .click(configuratorSofa.configuratorModulesTab.fistLabelOption)
    .expect(configuratorSofa.baseModulesOption.fifthModuleIsNotClickable)
    .ok();
  const structure = await getStructure('joyn')();
  const numbersOfSleepingModules = getSku(structure, Sofa.getNumbersOfSleepingModules).length;
  await t
    .expect(numbersOfSleepingModules).eql(4);
});
