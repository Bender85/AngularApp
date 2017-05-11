/**
 * Created by User on 11.05.2017.
 */
(function() {
    'use strict';
    angular
        .module('angApp')
        .factory('simpleLogin', ['$http', function($http) {
            return {
                login: function() {
                    return $http.get('get url!');
                }
            }
        }])
})();
