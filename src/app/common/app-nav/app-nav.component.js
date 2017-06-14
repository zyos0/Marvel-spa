import templateUrl from './app-nav.html';

export const navComponent = {
    bindings: {
        onSearch: '&',
        kind:'@'
    },
    templateUrl,
    controller: class NavComponentt {
        constructor($state, $http) {
            'ngInject';
            this.$state = $state;
            this.$http = $http;
            this.search='';
            console.log("cons",this.onSearch);
        }

        goHome(){
            this.$state.go('app');
        }

        $onInit() {

            console.log("ini",this.onSearch);
        }

    }
};
