describe('component: userPostsList', function() {
  var $componentController;

  beforeEach(module('adminApp'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  it('should implement $onInit', function() {
    var ctrl = $componentController('userPostsList', null, null);

    expect(ctrl.$onInit).toBeDefined();
  });
});