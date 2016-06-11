'use strict';

angular.module('shopnxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('terms', {
        title: 'Terms and conditions',
        url: '/terms',
        templateUrl: 'app/terms/terms.html',
        controller: 'TermsCtrl'
      });
  });
