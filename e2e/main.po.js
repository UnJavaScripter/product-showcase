/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  this.searchInput = element(by.css('#search-input'));
  this.items = element(by.css('body')).all(by.repeater('item in main.items'));
};

module.exports = new MainPage();
