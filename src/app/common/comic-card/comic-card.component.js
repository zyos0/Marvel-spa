import templateUrl from './comic-card.html';
export const comicCardComponent={
    bindings:{
        comic:'<',
        action:'@'
    },
    templateUrl,
    controller: class comicCardComponent{

        constructor($uibModal,storageService){
            'ngInject';
            this.$uibModal=$uibModal;
            this.storageService=storageService;

        }

        $onInit() {

        }

        openModal(){
            this.$uibModal.open({
                component:'comicModal',
                resolve:{
                    comic:  ()=> {
                        return this.comic;
                    }
                }

            });
        }


        delete(){
            this.storageService.deleteFav(this.comic.id);
        }



    }

};
