import { ClientFunction } from 'testcafe';

const jp = require('jsonpath');

const getUniqueEmail = () => `qateam+test+${ Math.random().toString(36).substring(2) }@mycs.com`;

const getLastSavedDesign = ClientFunction(() => {
  if (FC.json.last_saved_design) {
    return Promise.resolve(FC.json.last_saved_design);
  }

  return new Promise((resolve, reject) => {
    let lastSavedDesign;
    Object.defineProperty(FC.json, 'last_saved_design', {
      get: () => lastSavedDesign,
      set: (data) => {
        lastSavedDesign = data;
        resolve(data);
      }
    });
    setTimeout(() => reject(new Error('last_saved_design is missing from FS.json')), 3000);
  });
});

const getDataLayerSaveDesignEvent = ClientFunction(() => {
  const event = dataLayer.find((item) => item.event === 'saveDesignSent');
  if (event) return Promise.resolve(event);

  return new Promise((resolve, reject) => {
    const oldPush = dataLayer.push;
    Object.defineProperty(dataLayer, 'push', {
      value: (data) => {
        oldPush(data);
        if (data.event === 'saveDesignSent') resolve(data);
      }
    });
    setTimeout(() => reject(new Error('Event "saveDesignSent" missing form dataLayer')), 3000);
  });
});

/*
 * get JSON structure from localStorage
 * with different furniture {joyn, pyllow ... }
 */
const getStructure = (furnitureType) =>
  ClientFunction(
    () => JSON.parse(localStorage[`mycs.furniture_${ furnitureType }`]).structure,
    {
      dependencies: {
        furnitureType
      }
    }
  );

/*
* Extract the main price in the Configurator
*/
const getConfiguratorPrice = ClientFunction(() => {
  const priceSubtotal = document.querySelector('[class^="Price__mainPrice"]').textContent;
  return parseInt(priceSubtotal.replace(/[^0-9\.]/g, ''), 10);
});

/*
 * get sku from structure for {joyn, pyllow ... }
 */
function getSku(StructureBefore, QueryPathToSku) {
  return jp.query(StructureBefore, QueryPathToSku);
}

/*
 * get url path name from
 * address bar
 */
function getAddressUrlPathName() {
  return ClientFunction(() => window.location.pathname)();
}

export { getUniqueEmail, getLastSavedDesign, getDataLayerSaveDesignEvent, getStructure, getSku, getAddressUrlPathName, getConfiguratorPrice };
