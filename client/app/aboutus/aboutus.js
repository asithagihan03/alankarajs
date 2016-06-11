'use strict';

angular.module('shopnxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('aboutus', {
        title: 'About us',
        url: '/aboutus',
        templateUrl: 'app/aboutus/aboutus.html',
        controller: 'AboutusCtrl'
      });
  });
