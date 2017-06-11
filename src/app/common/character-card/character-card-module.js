import {characterCardComponent} from './character-card.component'
import './character-card.scss';


export const characterCard = angular
    .module('common.character-component', [])
    .component('characterCard', characterCardComponent)
    .name;