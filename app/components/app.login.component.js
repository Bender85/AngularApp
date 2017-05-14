(function () {
    'use strict';
    angular
        .module('angApp')
        .component('mainLogin', {
            templateUrl: 'app/views/login.html',
            controller: loginController,
            bindings: {
                logins: '='
            }
        });
        loginController.$inject = ['authenticationService'];
        function loginController(authenticationService) {
            var $ctrl = this;
            $ctrl.rememberme = 0;
            $ctrl.login = login;
            // $ctrl.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            $ctrl.user = {
                email: '',
                password: '',
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                rememberme: ''
                // csrf: 'werwer'
            };

            function login() {
                // console.log($ctrl.user);
                authenticationService.logine($ctrl.user).then(resolve, reject);
                function resolve(response) {
                    console.log(response);
                }
                function reject(err) {
                   console.log(err);
                }
            }
        }
})();
