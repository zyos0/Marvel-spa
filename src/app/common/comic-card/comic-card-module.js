import {comicCardComponent} from './comic-card.component'
import './comic-card.scss';


export const comicCard = angular
    .module('common.comic-component', [])
    .component('comicCard', comicCardComponent)
    .name;