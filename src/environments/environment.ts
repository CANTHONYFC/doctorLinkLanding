import {hostSelected} from './enviroment.conts';

export const environment = {
    production: true,
    serviceGeneral: hostSelected.host,
    serviceGeneralAnother: 'https://41ef-190-233-139-45.ngrok.io/',
    serviceSecEngine: hostSelected.host + 'secengine/',
    apiEngine: hostSelected.host + 'api/',
    serviceCrmOperation: hostSelected.host + 'crm-operation/',
    PAYPAL_CONFIG: {
        production: true,
        paypalClientId: 'AZEZkdMYDBPBzrov2Xe22rhV_wIcus85vld2-7IBkQvHGcvIMbKHyb2m_o1Lw2B4zuO73sOFbfHvAZ5u'
    },
    NIUBIZ_CONFIG: {
      production: true,
      merchantId: '456879852', 
      checkoutJsUrl: 'https://static-content-qas.vnforapps.com/v2/js/checkout.js',
      endpointSession: 'https://apis.niubiz.com/api.ecommerce/v2/ecommerce/token/session/', 
      endpointAuthorization: 'https://apis.niubiz.com/api.authorization/v3/authorization/ecommerce/'
    },
    URL_TWODOMAIN: 'http://localhost:4200/'
    //drLink

};
export const CONFIG_GOOGLE = {
    googleClientId: 'xxxxxxxxxxxxxxxxxxxxxx',
    googleSecretId: 'xxxxxxxxxxxxxxxxxxxxxx'
};
