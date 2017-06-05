import uiRouter from 'angular-ui-router';
import { appComponent } from './app.component';
import { appNav } from './app-nav/app-nav.module';
import './app.scss';

export const app = angular.module('common.app', [
    uiRouter,
    appNav
  ])
  .component('app', appComponent)
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('app', {
        url: '/app',
        component: 'app',
      });
  })
  .name;
