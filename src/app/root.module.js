import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { common } from './common/common.module';
import httpHandler from './services/httpHandler';
import { rootComponent } from './root.component';
import 'typeface-marvel';
import jQuery from "jquery";
import 'bootstrap';
import uib from  'angular-ui-bootstrap';
import ngstorage from'ngstorage';




import './root.scss';


export const root = angular
    .module(
        'root',
        [
            uiRouter,
            common,
            uib,
            'ngStorage'
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
