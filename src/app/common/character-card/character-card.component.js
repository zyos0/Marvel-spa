import templateUrl from './character-card.html';
export const characterCardComponent={
    bindings:{
        character:'<'
    },
    templateUrl,
    controller: class CharacterCardComponent{

        constructor(){
            'ngInject';
        }

        $onInit() {
            console.log("este");
                console.log(this.character);
        }



    }

};
