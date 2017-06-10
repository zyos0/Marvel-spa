import md5 from 'crypto-js/md5';

export default class httpHandler {
    baseApi;
    publicApiKey;

    constructor($q) {
        'ngInject';
        this.$q = $q;
        this.publicApiKey = '8c8ae35a053ca0fc4f8541903923a928';
        this.baseApi = 'https://gateway.marvel.com:443/v1/public';
    }



    request=(config) =>{
        if(config.url.startsWith('api')){
            config.url=this.baseApi+config.url.replace('api','');
            config.params = config.params || {};
            config.params.apikey=this.publicApiKey;
        }
        return config;
    }



}
