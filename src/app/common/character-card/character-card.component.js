import templateUrl from './character-card.html';
export const characterCardComponent={
    bindings:{
        character:'<',
        full:'@'
    },
    templateUrl,
    controller: class CharacterCardComponent{

        constructor($location){
            'ngInject';
            this.$location=$location;
        }

        $onInit() {

        }

        goToDetails(){
            this.$location.path('/character/'+this.character.id);
        }



    }

};
