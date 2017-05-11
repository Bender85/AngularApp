angular
    .module('angApp',[
        'ngRoute',
        'ngCookies'
    ])
    .config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];

    function config($routeProvider, $locationProvider) {
        // routes
        $routeProvider
            .when('/home', {
                templateUrl: 'app/views/home.html',
                controller: 'angController',
                controllerAs: 'ang'
            })
            .when('/login', {
                templateUrl: 'app/views/login.html',
                controller: 'loginController',
                controllerAs: 'login'
            })
            .when('/validation', {
                templateUrl: 'app/views/validation.html',
                controller: 'angController',
                controllerAs: 'ang'
            })
            .otherwise({
                redirectTo: '/'
            });
            $locationProvider.html5Mode(true);
    }
