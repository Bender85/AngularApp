(function() {
    'use strict';
    angular
        .module('angApp')
        .controller('loginController', loginController);

        function loginController() {
            var vm = this;
            vm.login = login;

            function login() {
                alert('asdasd');
            }
        }
})();