export class MainController {
  constructor ($window, $timeout, DataFactory, toastr, $filter) {
    'ngInject';

    let that = this;

    this.window = $window;
    this.toastr = toastr;
    this.DataFactory = DataFactory;
    this.$filter = $filter;

    this.items = [];
    this.getItems(DataFactory);
    this.searchInput = "";


    this.window.addEventListener('scroll', () => {
      this.window.requestAnimationFrame(() => {
        if (( (this.window.innerHeight + this.window.scrollY) >= document.body.offsetHeight - 150) &&  !this.searchInput)  {
            $timeout(() => {
              that.getMoreItems(DataFactory);
            },0);
        }
      });
    });


  }

  getItems(){
    let that = this;
    let promise = that.DataFactory.getItems();
    promise.then(function(response){
      that.noData = false;

      response.data.data.map(function(item){
        that.items.push(item);
      })
    })
    .catch(function(err){
      that.noData = true;

      that.toastr.info(that.$filter('translate')('I_couldnt_get_data'), that.$filter('translate')('Ooops'), {
        iconClass: 'toast-black',
        timeOut: 2500
      });
    })
  }

  getMoreItems(){
    let that = this;
    let promise = that.DataFactory.getMore();
    promise.then(function(response){
      that.toastr.info(that.$filter('translate')('Getting_more_data'), {
        iconClass: 'toast-black',
        progressBar: true,
        timeOut: 800
      })

      response.data.data.map(function(item){
        that.items.push(item);
      })
    })
    .catch(function(){
      that.noData = true;

      that.toastr.info(that.$filter('translate')('I_couldnt_get_more_data'), that.$filter('translate')('Ooops'), {
        iconClass: 'toast-black',
        timeOut: 2500
      });
    });
  }



}
