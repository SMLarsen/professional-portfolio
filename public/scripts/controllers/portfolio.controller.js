/*jshint esversion: 6 */
angular.module('app').controller('PortfolioController', [function($scope, $mdDialog) {
    console.log("Portfolio Controller Started");
    let self = this;
    self.showFAB = true;

    self.goToTop = function() {
        $('html, body').animate({
            scrollTop: 0
        }, 'fast');
    };

    self.showAlert = function(ev) {
        $mdDialog.show({
            scope: $scope,
            preserveScope: true,
            template: '<p>test</p>',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: self.customFullscreen // Only for -xs, -sm breakpoints.
        });
    };


}]);
