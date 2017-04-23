describe('component: signInForm', function() {
  var $componentController;

  beforeEach(module('adminApp'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  it('should implement $onInit', function() {
    var ctrl = $componentController('signInForm', null, null);

    expect(ctrl.$onInit).toBeDefined();
  });

  it('should implement login method', function() {
    var ctrl = $componentController('signInForm', null, null);

    expect(ctrl.login).toBeDefined();
  });
});