/**
 * Created by User on 11.05.2017.
 */
(function() {
    'use strict';
    angular
        .module('angApp')
        .factory('authenticationService', authenticationService);
        authenticationService.$inject = ['$http', '$q', '$cookies', '$httpParamSerializerJQLike'];
        function authenticationService($http, $q, $cookies, $httpParamSerializerJQLike) {
            return {
                logine: logine,
                logOut: logOut,
            };
            function logine(data) {
                return $q(function(resolve, reject) {
                    var url = 'https://teletherapy.ignorelist.com/api/auth/login';
                    var inf = {
                        method: 'POST',
                        url: url,
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        data: $httpParamSerializerJQLike(data)
                    };
                    $http(inf).then(function(result) {
                        if(result.data.errors == null) {
                            return result.data;
                        } else {
                            reject(result.data.errors);
                        }
                    })
                })
            }
            function logOut() {

            }
        }
})();
