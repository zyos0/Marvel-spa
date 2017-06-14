export default class storageService {


    constructor($localStorage) {
        'ngInject';
        this.$localStorage = $localStorage;
        this.masterKey = 'lf';
        this.favs = $localStorage[this.masterKey] || {};


        console.log(this.favs);
    }


    getFavs = () => {
        return this.favs;
    };

    favExist = (id) => {
        return (this.favs[id]);
    };

    persistRandom = (comics, number = 3) => {
        console.log(comics);
        let winners = [];
        comics.forEach(
            comic => {
                if (!this.favExist(comic.id))
                    winners.push(comic)
            }
        );
        console.log(winners);
        let toAdd = winners.length - number;

        toAdd = (toAdd >= 0) ? (toAdd > number ? number : toAdd) : (toAdd === 0 ? number : toAdd + number);

        console.log(toAdd);
        console.log(this.favs);
        while (toAdd--) {
            const wi = Math.floor(winners.length * Math.random());
            this.persistFavs(winners[wi]);
            winners.splice(wi, 1);
        }
    };


    persistFavs = (comic) => {
        if (this.favExist(comic.id)) {
            return false;
        }
        this.favs[comic.id] = comic;
        this.$localStorage[this.masterKey] = this.favs;
        return true;
    }

    deleteFav(id) {
        if (!this.favExist(id)) {
            return false;
        }
        delete this.favs[id];
        this.$localStorage[this.masterKey] = this.favs;
        return true;
    }


}
