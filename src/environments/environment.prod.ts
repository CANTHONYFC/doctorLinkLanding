import {hostSelected} from './enviroment.conts';

export const environment = {
    production: true,
    serviceGeneral: hostSelected.hostProd,
    apiEngine: hostSelected.hostProd + 'api/',
    serviceGeneralAnother: 'https://41ef-190-233-139-45.ngrok.io/',
    serviceSecEngine: hostSelected.hostProd + 'secengine/',
    serviceSecOperation: hostSelected.hostProd + 'secoperation/',
    serviceAdminEngine: hostSelected.hostProd + 'admengine/',
    serviceAdminOperation: hostSelected.hostProd + 'setting-operation/',
    servicePosEngine: hostSelected.hostProd + 'posengine/',
    serviceQontrolsSetting: hostSelected.hostProd + 'setting-operation/',
    serviceSettingOperation: hostSelected.hostProd + 'setting-operation/',
    serviceCrmOperation: hostSelected.hostProd + 'crm-operation/',
    PAYPAL_CONFIG: {
        production: true,
        paypalClientId: 'AZEZkdMYDBPBzrov2Xe22rhV_wIcus85vld2-7IBkQvHGcvIMbKHyb2m_o1Lw2B4zuO73sOFbfHvAZ5u'
    },
    URL_TWODOMAIN: 'https://app.drlinkmed.com/'
};
export const CONFIG_GOOGLE = {
    googleClientId: 'xxxxxxxxxxxxxxx',
    googleSecretId: 'xxxxxxxxxxxxxxxxxx'
};




