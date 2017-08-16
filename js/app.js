"use strict";

(function(){
  angular.module("wdinstagram", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])

  function RouterFunction($stateProvider){
    $stateProvider
      .state("entryIndex", {
        url: "/entry",
        templateUrl: "js/entry/index.html",
        controller: "EntryIndexController",
        controllerAs: "vm"
      })
      .state("entryShow", {
        url: "entry/:id",
        templateUrl: "js/entry/show.html",
        controller: "EntryShowController",
        controllerAs: "vm"
      })
  }
})();
