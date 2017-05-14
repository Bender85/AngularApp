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
        };

        var loginState = {
            name: 'login',
            url: '/login',
            component: 'mainLogin',
            resolve: {
                // users: function(UserService) {
                //     return UserService.list();
                // }
            }
        };

        var validationState = {
            name: 'validation',
            url: '/validation',
            component: 'formValidation',
            resolve: {

            }
        };

        $stateProvider.state(helloState);
        $stateProvider.state(loginState);
        $stateProvider.state(validationState);
        $urlRouterProvider.otherwise('/home');
    });