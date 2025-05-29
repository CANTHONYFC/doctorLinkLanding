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
};
export const CONFIG_GOOGLE = {
    googleClientId: 'xxxxxxxxxxxxxxx',
    googleSecretId: 'xxxxxxxxxxxxxxxxxx'
};
export const PAYPAL_CONFIG = {
    production: false,
    paypalClientId: 'AYjJfzKNn-HdePlhW4qvIoU4ogDPUayCyv5e9ewNbTlus5vAMw9rOUtthaSjEmoP-4VwFRgczFRp_g8c'
};
