import angular from 'angular';
import uiRouter from 'angular-ui-router';

import httpHandler from './services/httpHandler';
import { rootComponent } from './root.component';
import './root.scss';
export const root = angular
    .module(
        'root',
        [
            uiRouter
        ]
    )
    .component('root',rootComponent)
    .service('httpHandler',httpHandler)
    .config(($locationProvider,$httpProvider, $urlRouterProvider) => {
        'ngInject';
        $locationProvider.html5Mode(true);
        $httpProvider.interceptors.push('httpHandler');
    })
    .name;
