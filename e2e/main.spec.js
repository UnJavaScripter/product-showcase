'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
  });

  it('should list 20 initial items', function() {
    expect(page.items.count()).toEqual(20);
  });

  it('should no items when fitering for a weird string', function () {
    page.searchInput.sendKeys("¡¡¡¡¡wingardium leviosa!!!!!")
    expect(page.items.count()).toEqual(0);
  });

});
