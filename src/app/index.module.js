

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { DataFactory } from './components/data.factory';

angular.module('awesomecompany', ['ngTouch', 'ngAria', 'ui.router', 'toastr', 'pascalprecht.translate'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .factory('DataFactory', ($http, $q) => new DataFactory($http, $q))
