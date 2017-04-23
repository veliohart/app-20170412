describe('Service: $helpers', function() {
  var $service;

  beforeEach(module('adminApp'));
  beforeEach(inject(function(_$helpers_) {
    $service = _$helpers_;
  }));

  it('should have urlQueryBulder method', function() {
    expect($service.urlQueryBuilder).toBeDefined();
  });

  it('should transform params to url string', function() {
    expect($service.urlQueryBuilder({userId: 1, id: 5, title: 'test title'}))
      .toEqual('?userId=1&id=5&title=test title');
  });

  it('should return EMPTY string when no params passed', function() {
    expect($service.urlQueryBuilder({}))
      .toEqual('');

    expect($service.urlQueryBuilder())
      .toEqual('');
  });    
});