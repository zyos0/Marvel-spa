import templateUrl from './app-nav.html';

export const navComponent = {
    bindings: {
        onSearch: '&',
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

        lol(){
            console.log('no quiero  funcionar');

        }
        $onInit() {

            console.log("ini",this.onSearch);
        }

    }
};
