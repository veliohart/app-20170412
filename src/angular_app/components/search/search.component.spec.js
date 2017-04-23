describe('component: search', function() {
  var $componentController;

  beforeEach(module('adminApp'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  it('should implement $onInit', function() {
    var ctrl = $componentController('search', null, null);

    expect(ctrl.$onInit).toBeDefined();
  });

  it('should have changeType method', function() {
    var ctrl = $componentController('search', null, null);

    expect(ctrl.changeType).toBeDefined();
  });

  it('should call the `vm.changeType` when changing search type', function() {
    var changeType = jasmine.createSpy('changeType');
    var ctrl = $componentController('search', null, null);

    ctrl.changeType('posts');
    expect(ctrl.type).toEqual('posts');

    ctrl.changeType('albums');
    expect(ctrl.type).toEqual('albums');

    ctrl.changeType('both');
    expect(ctrl.type).toEqual('both');
  });
});