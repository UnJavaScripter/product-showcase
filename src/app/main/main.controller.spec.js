describe('controllers', () => {
  let vm,
    request_getThings,
    $httpBackend,
    q,
    failIt = false
    ;

  beforeEach(angular.mock.module('awesomecompany'));

  beforeEach(inject(($controller, toastr, $injector, $q, $timeout) => {
    q = $q;
    spyOn(toastr, 'info').and.callThrough();

   let _DataFactory_ = {
      getItems: () => {
        let deferred = q.defer();
        failIt ? deferred.reject("something failed") : deferred.resolve({"data":{"data":[{}]}});
        return deferred.promise;
      },
      getMore: () => {
        let deferred = q.defer();
        failIt ? deferred.reject("something failed") : deferred.resolve({"data":{"data":[{}]}});
        return deferred.promise;
      }
    };

    


    vm = $controller('MainController', { DataFactory: _DataFactory_});
    
    vm.items = [];

    $httpBackend = $injector.get('$httpBackend');


  }));

  it('should have an empty "items" array', () => {
    expect(vm.items.length).toEqual(0);
  });

  it('vm.getItems() should make the "items" array\'s length be greater than 0', inject($timeout => {
    vm.getItems();
    $timeout.flush();
    expect(vm.items.length).not.toEqual(0);
  }))

  it('vm.getMoreItems() should make the "items" array\'s length be even greater', inject($timeout => {
    vm.getItems();
    $timeout.flush();
    let currentLength = vm.items.length;
    vm.getMoreItems();
    $timeout.flush();
    expect(vm.items.length).toBeGreaterThan(currentLength);
  }))

});
