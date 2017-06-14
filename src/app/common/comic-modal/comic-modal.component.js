import templateUrl from './comic-modal.html';
export const comicModalComponent={
    templateUrl
    ,bindings: {
        close: '&',
        resolve: '<',
        dismiss: '&'
    },
    controller: class ComicModalComponent{
        constructor(storageService){
            'ngInject';
            this.storageService=storageService;
            this.comic={};

        }


        persistComic(){
            this.storageService.persistFavs(this.comic);
        }

        $onInit() {
            this.comic=this.resolve.comic;
            console.log(this.comic);
        }

        isFav(){
            return this.storageService.favExist(this.comic.id);
        }





    }

};
