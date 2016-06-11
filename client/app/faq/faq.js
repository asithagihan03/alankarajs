'use strict';

angular.module('shopnxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('faq', {
        title: 'FAQ',
        url: '/faq',
        templateUrl: 'app/faq/faq.html',
        controller: 'FaqCtrl'
      });
  });
