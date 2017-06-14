import uiRouter from 'angular-ui-router';
import {appComponent} from './app.component';
import {appNav} from './app-nav/app-nav.module';
import {comicCard} from './comic-card/comic-card-module';
import {comicModal} from './comic-modal/comic-modal-module';
import {characterCard} from './character-card/character-card-module';
import {characterDetail} from './character-detail/character-detail-module';
import marvelService from '../services/marvelService';
import storageService from '../services/storageService';
import ngstorage from'ngstorage';

import './app.scss';

export const app = angular.module('common.app', [
    uiRouter,
    appNav,
    characterCard,
    comicCard,
    comicModal,
    characterDetail,
    'ngStorage'
])
    .component('app', appComponent)
    .service('marvelService', marvelService)
    .service('storageService', storageService)
    .config(($stateProvider) => {
        'ngInject';
        $stateProvider
            .state('app', {
                url: '/',
                component: 'app',
            });
    })
    .name;