import angular from 'angular';

import '../style/app.css'; //strange, but that's how it is. Also in react.

let myDir = () => { //defined in it's own function. () => = function().
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

var app1 = angular.module("app", []) //behøver ikke var app1 =. Eller app1.
  app1.directive('myDirective', myDir) //camelcase.
  app1.controller('AppCtrl', AppCtrl);

export default MODULE_NAME;