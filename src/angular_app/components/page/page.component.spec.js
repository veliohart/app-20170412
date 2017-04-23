describe('component: page', function() {
  var $componentController;

  beforeEach(module('adminApp'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  it('should implement $onInit', function() {
    var ctrl = $componentController('page', null, null);

    expect(ctrl.$onInit).toBeDefined();
  });
});