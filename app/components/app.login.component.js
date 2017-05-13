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
        function loginController() {
            var $ctrl = this;
            $ctrl.login = login;

            function login() {
                alert('asdasd');
            }
        }
})();
