angular
    .module('angApp',[

        'ngCookies',
        'ui.router'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        var helloState = {
            name: 'home',
            url: '/home',
            templateUrl: 'app/views/home.html'
        }

        var loginState = {
            name: 'login',
            url: '/login',
            templateUrl: 'app/views/login.html'
        }

        var validationState = {
            name: 'validation',
            url: '/validation',
            templateUrl: 'app/views/validation.html'
        }

        $stateProvider.state(helloState);
        $stateProvider.state(loginState);
        $stateProvider.state(validationState);
        $urlRouterProvider.otherwise('/');
    });
    // .config(config);
    //
    // config.$inject = ['$routeProvider', '$locationProvider'];

    // function config($routeProvider, $locationProvider) {
    //     // routes
    //     $routeProvider
    //         .when('/home', {
    //             templateUrl: 'app/views/home.html',
    //             controller: 'mainController',
    //             controllerAs: 'main'
    //         })
    //         .when('/login', {
    //             templateUrl: 'app/views/login.html',
    //             controller: 'loginController',
    //             controllerAs: 'login'
    //         })
    //         .when('/validation', {
    //             templateUrl: 'app/views/validation.html',
    //             controller: 'mainController',
    //             controllerAs: 'main'
    //         })
    //         .otherwise({
    //             redirectTo: '/'
    //         });
    //         $locationProvider.html5Mode(true);
    // }
