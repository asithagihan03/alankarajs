'use strict';

describe('Controller: TermsCtrl', function () {

  // load the controller's module
  beforeEach(module('shopnxApp'));

  var TermsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TermsCtrl = $controller('TermsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});
