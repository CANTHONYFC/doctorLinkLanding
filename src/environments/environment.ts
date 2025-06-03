import {hostSelected} from './enviroment.conts';

export const environment = {
    production: true,
    serviceGeneral: hostSelected.host,
    serviceGeneralAnother: 'https://41ef-190-233-139-45.ngrok.io/',
    serviceSecEngine: hostSelected.host + 'secengine/',
    apiEngine: hostSelected.host + 'api/',
    serviceCrmOperation: hostSelected.host + 'crm-operation/',

    //drLink

};
export const CONFIG_GOOGLE = {
    googleClientId: 'xxxxxxxxxxxxxxxxxxxxxx',
    googleSecretId: 'xxxxxxxxxxxxxxxxxxxxxx'
};
export const PAYPAL_CONFIG = {
    production: false,
    paypalClientId: 'AYjJfzKNn-HdePlhW4qvIoU4ogDPUayCyv5e9ewNbTlus5vAMw9rOUtthaSjEmoP-4VwFRgczFRp_g8c'
};
