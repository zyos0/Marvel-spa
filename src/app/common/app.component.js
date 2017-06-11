import templateUrl from './app.html';



export const appComponent = {
    templateUrl,
    controller:class AppComponent {
        constructor($state,marvelService) {
            'ngInject';
            this.$state = $state;
            this.marvelService=marvelService;
            this.characters=[];
            this.searchText='';
            this.currentPage=1;
            this.maxPages=10;
        }

        $onInit() {
            this.marvelService.getCharacters()
                .then(
                    this.handleData,
                    this.handleError
                );
        }

        handleData=(data)=>{
            console.log(data);
            this.characters=data.data.results;
            this.total=data.data.total;
            console.log("personajes",this.characters);
        };

        handleError=(err)=>{
            console.log(err);

        };

        updateCharacters(){
            console.log(this.currentPage);
            this.marvelService.getCharacters(this.currentPage,this.searchText)
                .then(
                    this.handleData,
                    this.handleError
                );
        }

        applySearch(){
            this.marvelService.getCharacters(this.currentPage,this.searchText)
                .then(
                    this.handleData,
                    this.handleError
                );

        }

        queryApi(Query) {
            this.searchText=Query;
            this.applySearch();

        }

        logout() {
            /*return this.authService
             .logout()
             .then(() => this.$state.go('auth.login'));*/
        }
    }
};

