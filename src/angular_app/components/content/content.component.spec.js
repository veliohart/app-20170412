describe('component: content', function() {
  var $componentController;

  beforeEach(module('adminApp'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  it('should implement $onInit', function() {
    var ctrl = $componentController('content', null, null);

    expect(ctrl.$onInit).toBeDefined();
  });

  // it('should call the `onDelete` binding, when deleting the hero', function() {
  //   var onDeleteSpy = jasmine.createSpy('onDelete');
  //   var bindings = {hero: {}, onDelete: onDeleteSpy};
  //   var ctrl = $componentController('heroDetail', null, bindings);

  //   ctrl.delete();
  //   expect(onDeleteSpy).toHaveBeenCalledWith({hero: ctrl.hero});
  // });

  // it('should call the `onUpdate` binding, when updating a property', function() {
  //   var onUpdateSpy = jasmine.createSpy('onUpdate');
  //   var bindings = {hero: {}, onUpdate: onUpdateSpy};
  //   var ctrl = $componentController('heroDetail', null, bindings);

  //   ctrl.update('foo', 'bar');
  //   expect(onUpdateSpy).toHaveBeenCalledWith({
  //     hero: ctrl.hero,
  //     prop: 'foo',
  //     value: 'bar'
  //   });
  // });

});