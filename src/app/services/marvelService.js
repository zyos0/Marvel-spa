export default class marvelService {


    constructor($http) {
        'ngInject';
        this.$http = $http;
        this.sortingOpts = {
            characters: [
                {name: 'name (Asc)', value: 'name'},
                {name: 'name (Desc)', value: '-name'},
                {name: 'Modified (Asc)', value: 'modified'},
                {name: 'Modified (Desc)', value: '-modified'}
            ]
            ,
            comics: [
                {name: 'Foc Date (Asc)', value: 'focData'},
                {name: 'On Sale Data (Asc)', value: 'onsaleDate'},
                {name: 'Title (Asc)', value: 'title'},
                {name: 'Issue Number (Asc)', value: 'issueNumber'},
                {name: 'Modified (Asc)', value: 'modified'},
                {name: 'Foc Date (Desc)', value: '-focData'},
                {name: 'On Sale Data (Desc)', value: '-onsaleDate'},
                {name: 'Title (Desc)', value: '-title'},
                {name: 'Issue Number (Desc)', value: '-issueNumber'},
                {name: 'Modified (Desc)', value: '-modified'}
            ]
        }


    }

    getSortCharacters() {
        return this.sortingOpts.characters;
    }

    getSortComics() {
        return this.sortingOpts.comics;
    }

    getCharacters(page = 0, search, orderBy, limit = 10) {

        var params = {
            limit: limit,
            offset: ((page) ? --page : page) * limit
        };
        if (search)
            params.nameStartsWith = search;
        if (orderBy)
            params.orderBy = orderBy;

        return this.$http.get('api/characters',
            {
                params: params
            }
        ).then(response => response.data);
    }

    getSingleCharacter(id) {
        return this.$http.get('api/characters/' + id)
            .then(response => response.data);
    }

    getCharacterComics(id, page = 0, search, orderBy, limit = 10) {
        var params = {
            limit: limit,
            offset: ((page) ? --page : page) * limit
        };
        if (search)
            params.titleStartsWith = search;
        if (orderBy)
            params.ord

        return this.$http.get('api/characters/' + id + '/comics',
            {
                params: params
            }
        ).then(response => response.data);
    }


}
