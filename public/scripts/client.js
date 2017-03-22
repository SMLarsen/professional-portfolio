/*jshint esversion: 6 */
const app = angular.module('app', ['ngRoute', 'ngMaterial']);

app.config(function($routeProvider, $mdThemingProvider) {

    $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('indigo')
        .warnPalette('green')
        // .backgroundPalette('amber')
        // .dark()
        ;

    $routeProvider
        .when('/home', {
            templateUrl: 'views/templates/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        })
        .when('/education', {
            templateUrl: 'views/templates/education.html',
            controller: 'EducationController',
            controllerAs: 'vm'
        })
        .when('/resume', {
            templateUrl: 'views/templates/resume.html',
            controller: 'ResumeController',
            controllerAs: 'vm'
        })
        .when('/portfolio', {
            templateUrl: 'views/templates/portfolio.html',
            controller: 'PortfolioController',
            controllerAs: 'vm'
        })
        .when('/contact', {
            templateUrl: 'views/templates/contact.html',
            controller: 'ContactController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: 'home'
        });
});
