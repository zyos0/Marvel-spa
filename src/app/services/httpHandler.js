import md5 from 'crypto-js/md5';

export default class httpHandler {

    constructor($q) {
        'ngInject';
        this.$q = $q;
        this.privateApiKey = 'ad014ddb98c3d83b768ed3e61c60cf63531fd36a';
        this.publicApiKey = '8c8ae35a053ca0fc4f8541903923a928';
        this.baseApi = 'http://gateway.marvel.com/v1/public';
    }

    request(config) {
        config.url = this.baseApi+config.url + '?apkiKey='+this.publicApiKey;
        return config;
    }



}
