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
    var alreadyBoughtList = this;

   /* alreadyBoughtList.itemName = "";
    alreadyBoughtList.itemQuantity = "";

    alreadyBoughtList.addItem = function () {
      ShoppingListCheckOffService.addItem(alreadyBoughtList.itemName, alreadyBoughtList.itemQuantity);
    }*/


    alreadyBoughtList.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
  }


  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.getItems();

    toBuy.removeItem = function (itemIndex) {
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
      //already bought list
      alreadyBoughtItems = [];

    service.addItem = function (itemName, quantity, obj) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      obj.push(item);
    };



    service.removeItem = function (itemIndex) {

      /*var toBuyItems = {name : items[itemIndex].name, quantity: items[itemIndex].quantity};
      alreadyBoughtItems.push(toBuyItems);
      */

      //add itmem to alreadybouhtItems list
      service.addItem(items[itemIndex].name, items[itemIndex].quantity, alreadyBoughtItems);
      //suppression de la liste l'indice 
      items.splice(itemIndex, 1);
    };


    service.getAlreadyBoughtItems = function () {
      return alreadyBoughtItems;
    };

    service.getItems = function () {
      return items;
    };


  }

})();