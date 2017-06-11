export default class marvelService {


    constructor($http) {
        'ngInject';
        this.$http = $http;
    }

    getCharacters(page = 0, search, orderBy = 'name', limit = 10) {
        console.log("desde", page);
        var params = {
            limit: limit,
            offset: ((page) ? --page : page) * limit
        };
        if(search)
            params.nameStartsWith=search;

        return this.$http.get('api/characters',
            {
                params: params
            }
        ).then(response => response.data);
    }


}
