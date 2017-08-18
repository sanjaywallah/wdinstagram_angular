"use strict";

(function(){
  angular.module("wdinstagram",
  [])
})();

(function () {
  angular
    .module('wdinstagram', [
      'ui.router',
      'ngResource'
    ])
    .config([
      '$stateProvider',
      RouterFunction
    ])

    .controller('EntryIndexController', [
      'Entry',
      EntryIndexControllerFunction
    ])

    .controller('EntryShowController', [
      'Entry',
      '$stateParams',
      EntryShowControllerFunction
    ])

    .factory('Entry', [
      '$resource',
      entryService
    ])

    function entryService ($resource) {
      return $resource('http://localhost:3000/entries/:id', {}, {
        update: {
          method: 'PUT'
        }
      })
    }

    function RouterFunction ($stateProvider) {
      $stateProvider
      .state('entryIndex', {
        url: '/entries',
        templateUrl: 'js/ng-views/index.html',
        controller: 'EntryIndexController',
        controllerAs: 'vm'
      })
      .state('entryShow', {
        url: '/entries/:id',
        templateUrl: 'js/ng-views/show.html',
        controller: 'EntryShowController',
        controllerAs: 'vm'
      })
    }

 function EntryIndexControllerFunction (Entry) {
   this.entries = Entry.query()
 }

 function EntryShowControllerFunction (Entry, $stateParams) {
   this.entry = Entry.get({id: $stateParams.id})
 }

})()
