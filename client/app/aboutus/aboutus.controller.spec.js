'use strict';

describe('Controller: AboutusCtrl', function () {

  // load the controller's module
  beforeEach(module('shopnxApp'));

  var AboutusCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutusCtrl = $controller('AboutusCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});
