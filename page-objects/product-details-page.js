import { Selector } from 'testcafe';

export default class ProductPage {
  constructor () {
    this.saveDesignInfoBlock = Selector('[class*="InfoBlock__saveDesignContainer"] button');
    this.emailInput = Selector('[class^="SaveDesignForm__form"] input');
    this.saveDesignSubmitButton = Selector('[class^="SaveDesignForm__form"] button');
    this.infoBlockWithSpecs = Selector('section.ProductSpecsTable__container__app-src-shared-components-ProductSpecsTable-');
    this.minCeilingHeightMsg = Selector('div:nth-child(2) > .InfoBlockSpecs__specsInfo__app-src-pdp-components-InfoBlock-InfoBlockSpecs- > div');
    this.configuratorLink = Selector('a.InfoBlock__configuratorLink__app-src-pdp-components-InfoBlock-');
    this.mainProductImage = Selector('[class*="TabbedProductPreview__mainImage"] img');

    this.productDetailsCarusel = {
      firstProductPreviewUrl: Selector('[class*="slick-active"]:nth-child(1) [class*="ProductPreview__cta"] a'),
      thirdProductPreviewButton: Selector('[class*="ProductDetailsPage__container"] div:nth-child(3) [class*="MediaPreview__container"]'),
      rightArrow: Selector('[class*="ProductDetailsPage__relatedProducts"] button.slick-arrow.slick-next'),
      rightArrowDisabled: Selector('[class*="ProductDetailsPage__relatedProducts"] button.slick-arrow.slick-next.slick-disabled'),
    };
  }
}
