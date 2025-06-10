import {hostSelected} from './enviroment.conts';

export const environment = {
    production: true,
    serviceGeneral: hostSelected.host,
    serviceGeneralAnother: 'https://41ef-190-233-139-45.ngrok.io/',
    serviceSecEngine: hostSelected.host + 'secengine/',
    apiEngine: hostSelected.host + 'api/',
    serviceCrmOperation: hostSelected.host + 'crm-operation/',
    PAYPAL_CONFIG: {
        production: false,
        paypalClientId: 'AQb39CfwlBbp_jOeDnF5OsE84a82Q6mcbJ2APDB7X4bIVPwmSy82vnkFIlHjH-P-fNTh8Bz-O1d13WN8'
    },
    URL_TWODOMAIN: 'http://localhost:4200/'
    //drLink

};
export const CONFIG_GOOGLE = {
    googleClientId: 'xxxxxxxxxxxxxxxxxxxxxx',
    googleSecretId: 'xxxxxxxxxxxxxxxxxxxxxx'
};
