describe('component: usersCardsList', function() {
  var $componentController;

  beforeEach(module('adminApp'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  it('should implement $onInit', function() {
    var ctrl = $componentController('usersCardsList', null, null);

    expect(ctrl.$onInit).toBeDefined();
  });
});