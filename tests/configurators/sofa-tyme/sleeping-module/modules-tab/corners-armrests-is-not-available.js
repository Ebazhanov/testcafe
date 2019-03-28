import config from '../../../../../config';
import ConfiguratorSofaPage from '../../../../../page-objects/configurator-pages/sofa/configurator-sofa-page';

const configuratorSofa = new ConfiguratorSofaPage();

fixture `Sleeping module`
  .page `${ config.baseUrl }/sofa-joyn/zwVsBovs9?tab=modules`;

test('Check that Corners & Armrests modules is not available for sleeping module', async t => {
  await t
    .click(configuratorSofa.configuratorModulesTab.fistLabelOption)
    .expect(configuratorSofa.armrestAndCornersModulesOption.firstModuleIsNotClickable.visible).ok()
    .expect(configuratorSofa.armrestAndCornersModulesOption.secondModuleIsNotClickable.visible)
    .ok()
    .expect(configuratorSofa.armrestAndCornersModulesOption.thirdModuleIsNotClickable.visible)
    .ok();
});

