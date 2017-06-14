import templateUrl from './character-detail.html';
export const characterDetailComponent = {
    templateUrl,
    controller: class CharacterDetailComponent {

        constructor($stateParams, marvelService,storageService) {
            'ngInject';
            this.marvelService = marvelService;
            this.storageService=storageService;
            this.$stateParams = $stateParams;
            this.comics = [];
            this.character = {};
            this.Favs=this.storageService.getFavs;
            console.log("favs");
            console.log(this.Favs());
            this.searchText='';
            this.orderBy=marvelService.getSortComics();
            this.currentPage=1;
            this.maxPages=10;
            this.busy=true;
        }

        $onInit() {
            this.marvelService.getSingleCharacter(this.$stateParams.id)
                .then(
                    this.handleCharacter,
                    this.handleError
                );

            this.updateComics();
        }

        updateComics(){
            this.busy=true;
            this.marvelService.getCharacterComics(this.$stateParams.id,this.currentPage,this.searchText,this.sorting)
                .then(
                    this.handleComics,
                    this.handleErrorComic
                );
        }


        handleCharacter = (data) => {
            this.character = data.data.results[0];
        };

        handleComics = (data) => {
            this.busy=false;
            this.comics = data.data.results;
            this.total = data.data.total;
            console.log(this.comics);
        };

        handleError = (err) => {
            console.log(err);

        };

        handleErrorComic = (err) => {
            this.busy=comics;
            console.log(err);

        };



        addRandom(){
            this.storageService.persistRandom(this.comics);
        }

        queryApi(Query) {
            this.searchText=Query;
            this.updateComics();

        }

    }

};
