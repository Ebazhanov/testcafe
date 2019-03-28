import { getAddressUrlPathName } from '../../utils';
import config from '../../config';
import ProductPage from '../../page-objects/product-details-page';

const productPage = new ProductPage();

fixture `Related products carousel`
  .page `${ config.baseUrl }/produkt/zwdurYjo?mx-notrack`;

test('Click on "view details" => Url is updated => Product itself is updated', async t => {
  const productUrlBefore = await getAddressUrlPathName();
  const mainImageUrlBefore = await productPage.mainProductImage.getAttribute('src');
  await t
    .click(productPage.productDetailsCarusel.thirdProductPreviewButton);
  const productUrlAfter = await getAddressUrlPathName();
  const mainImageUrlAfter = await productPage.mainProductImage.getAttribute('src');
  await t
    .expect(productUrlBefore).notEql(productUrlAfter)
    .expect(mainImageUrlBefore).notEql(mainImageUrlAfter);
});

test.page(`${ config.baseUrl }/produkt/FwjFGGJM?mx-notrack`)(
  'Arrows are working and changing the positions of products', async t => {
    await t
      .expect(productPage.productDetailsCarusel.firstProductPreviewUrl.exists).ok()
      .click(productPage.productDetailsCarusel.rightArrow)
      .expect(productPage.productDetailsCarusel.rightArrowDisabled.exists)
      .ok()
      .expect(productPage.productDetailsCarusel.firstProductPreviewUrl.exists)
      .notOk();
  }
);
