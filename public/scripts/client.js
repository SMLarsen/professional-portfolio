/*jshint esversion: 6 */
const app = angular.module('app', ['ngRoute', 'ngMaterial', 'ngSanitize']);

app.config(function($routeProvider, $mdThemingProvider) {

    $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('indigo')
        .warnPalette('red')
        // .backgroundPalette('amber')
        // .dark()
        ;

    $routeProvider
        .when('/home', {
            templateUrl: 'views/templates/home.html',
            controller: 'PortfolioController',
            controllerAs: 'vm'
        })
        .when('/education', {
            templateUrl: 'views/templates/education.html',
            controller: 'PortfolioController',
            controllerAs: 'vm'
        })
        .when('/resume', {
            templateUrl: 'views/templates/resume.html',
            controller: 'PortfolioController',
            controllerAs: 'vm'
        })
        .when('/portfolio', {
            templateUrl: 'views/templates/portfolio.html',
            controller: 'PortfolioController',
            controllerAs: 'vm'
        })
        .when('/contact', {
            templateUrl: 'views/templates/contact.html',
            controller: 'PortfolioController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: 'home'
        });
});
