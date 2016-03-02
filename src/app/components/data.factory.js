export class DataFactory {
  constructor ($http, $q) {
    'ngInject';
    this.$http = $http;
    this.$q = $q;

    //this.apiServer = "http://192.168.1.1:9000";
    this.apiServer = "http://awesomecompany-unjavascripter.rhcloud.com";
  }

  getItems(){
    let deferred = this.$q.defer();
    this.$http.get(`${this.apiServer}/api/things`).then(function(response){
      deferred.resolve(response);
    })
    .catch(function(err){
      deferred.reject(err)
    })
    return deferred.promise;
  }

  getMore(){
    let deferred = this.$q.defer();
    this.$http.get(`${this.apiServer}/api/moreThings`).then(function(response){
      deferred.resolve(response);
    })
    .catch(function(err){
      deferred.reject(err)
    })
    return deferred.promise; 
  }

}
