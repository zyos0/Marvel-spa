import templateUrl from './app.html';

export const appComponent = {
  templateUrl,
  controller: class AppComponent {
    constructor($state,$http) {
      'ngInject';
      this.$state = $state;
      this.$http=$http;
    }

      $onInit() {
      this.$http.get('api/characters').then(
          data=>{
              console.log(data);

          },
          error=>{
            console.log(error);
          }
      )

      }
    logout() {
      /*return this.authService
        .logout()
        .then(() => this.$state.go('auth.login'));*/
    }
  },
};
