import templateUrl from './app.html';



export const appComponent = {
    templateUrl,
    controller:class AppComponent {
        constructor($state,marvelService,storageService) {
            'ngInject';
            this.$state = $state;
            this.storageService=storageService;
            this.Favs=this.storageService.getFavs;
            this.marvelService=marvelService;
            this.characters=[];
            this.searchText='';
            this.orderBy=marvelService.getSortCharacters();
            console.log(this.orderBy);
            this.currentPage=1;
            this.maxPages=10;
            this.busy=false;
        }



        $onInit() {
           this.updateCharacters();
        }

        handleData=(data)=>{
            this.busy=false;
            console.log(data);
            this.characters=data.data.results;
            this.total=data.data.total;
            console.log("personajes",this.characters);
        };

        handleError=(err)=>{
            this.busy=false;
            console.log(err);

        };

        updateCharacters(){
            this.busy=true;
            this.marvelService.getCharacters(this.currentPage,this.searchText,this.sorting)
                .then(
                    this.handleData,
                    this.handleError
                );
        }



        queryApi(Query) {
            this.searchText=Query;
            this.updateCharacters();

        }

        logout() {
            /*return this.authService
             .logout()
             .then(() => this.$state.go('auth.login'));*/
        }
    }
};

