import {characterDetailComponent} from './character-detail.component'
import {comicCard} from '../comic-card/comic-card-module';
import {characterCard} from '../character-card/character-card-module';
import uiRouter from 'angular-ui-router';
import './character-detail.scss';


export const characterDetail = angular
    .module('common.character-detail-component', [uiRouter,comicCard])
    .component('characterDetail', characterDetailComponent)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('characterDetail', {
                url: '/character/:id',
                component: 'characterDetail',
            });


    })
    .name;