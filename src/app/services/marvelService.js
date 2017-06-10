export default class marvelService {


    constructor($http) {
        'ngInject';
        this.$http = $http;
    }

    getCharacters(page = 0, search, orderBy = 'name', limit = 20) {
        console.log("desde", page);
        return this.$http.get('api/characters',
            {
                params: {
                    limit: limit,
                    offset: ((page) ? --page: page) * limit
                }
            })
            .then(response => response.data);
    }


}
