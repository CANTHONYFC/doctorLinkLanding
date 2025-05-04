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
