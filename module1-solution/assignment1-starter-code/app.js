/**
 * Created by Constant on 01/10/2016.
 */
(function () {
  'use strict';

  angular.module('lunchCheck', [])

    .controller('LunchCheckController', function($scope){
      $scope.lunchMessage = "";
      $scope.lunchBox = "";
      $scope.mesages = ["Enjoy!", "Too Much!", "Please Enter data first", "Not Consider an Empty item i.e. , ,"];
      $scope.countItem=-2;

      function checkLunchBox (message) {
        var msg = [], resultEmpty = 0, result = msg.length;
        if (message !== '' && !angular.isUndefined(message)) {
          msg = message.split(",");

          if (msg.length > 0) {
            // Check if the tesxtBox is really empty
            resultEmpty = checkEmpty(msg);
            if (resultEmpty === -1) {
              result = resultEmpty;
            } else {
              result = msg.length
            }
          }
        }
        return result;
      }

      function checkEmpty (tab) {
        var len = tab.length, indexOfEmpty= 0, newTab = [], result = 0;
        angular.forEach(tab, function (value) {
          if (value === "" || value === " ") {
            indexOfEmpty =  tab.indexOf(value);
            if (indexOfEmpty !== -1) {
              newTab.push(value);
            }
          }
          if (len  === newTab.length) {
            result = -1;
          }

        });
        return result;

      }

      $scope.showMessage = function (){
        var nbItem = checkLunchBox($scope.lunchBox);
        $scope.countItem = nbItem;
        if (nbItem > 3) {
          $scope.lunchMessage = $scope.mesages[1];
        } else if (nbItem > 0 && nbItem <= 3) {
          $scope.lunchMessage = $scope.mesages[0];
        } else if (nbItem === 0) {
          $scope.lunchMessage = $scope.mesages[2];
        } /*else {
          // Really empty  -> "", " " only
          $scope.lunchMessage = $scope.mesages[3];
        }*/

      };
    });


})();