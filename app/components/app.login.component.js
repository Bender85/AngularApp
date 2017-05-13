(function () {
    'use strict';
    angular
        .module('angApp')
        .component('mainLogin', {
            templateUrl: 'app/views/login.html',
            // transclude: true,
            // replace: true,
            controller: loginController,
            bindings: {
                logins: '='
            }
        });
        function loginController($cookies) {
            var $ctrl = this;
            $ctrl.login = login;

            function login() {
                console.log($cookies);
                alert('asdasd');
            }
        }
})();
