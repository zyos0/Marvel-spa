import uiRouter from 'angular-ui-router';
import {appComponent} from './app.component';
import {appNav} from './app-nav/app-nav.module';
import {characterCard} from './character-card/character-card-module';
import marvelService from '../services/marvelService';

import './app.scss';

export const app = angular.module('common.app', [
    uiRouter,
    appNav,
    characterCard
])
    .component('app', appComponent)
    .service('marvelService', marvelService)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('app', {
                url: '/',
                component: 'app',
            });
    })
    .name;
