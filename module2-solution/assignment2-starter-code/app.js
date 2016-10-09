/**
 * Created by Constant on 01/10/2016.
 */
(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var itemAdder = this;

   /* itemAdder.itemName = "";
    itemAdder.itemQuantity = "";

    itemAdder.addItem = function () {
      ShoppingListCheckOffService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
    }*/


    itemAdder.items = ShoppingListCheckOffService.getBouItems();
  }


  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var showList = this;

    showList.items = ShoppingListCheckOffService.getItems();

    showList.removeItem = function (itemIndex) {
      ShoppingListCheckOffService.removeItem(itemIndex);
    };
  }


  function ShoppingListCheckOffService() {
    var service = this;

    // List of shopping items
    var items = [
      {name: 'Cookies', quantity: 10},
      {name: 'Patate', quantity: 5},
      {name: 'Orange', quantity: 2},
      {name: 'Bread', quantity: 40},
      {name: 'Cacke', quantity: 5}
    ],
      boughtItems = [];

    service.addItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      items.push(item);
    };



    service.removeItem = function (itemIdex) { debugger
      var byitems = {name : items[itemIdex].name, quantity: items[itemIdex].quantity};
      boughtItems.push(byitems);

      items.splice(itemIdex, 1);
    };


    service.getBouItems = function () {
      return boughtItems;
    };

    service.getItems = function () {
      return items;
    };


  }

})();