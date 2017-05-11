(function() {
    'use srtict';

    angular
        .module('angApp')
        .directive('mainNav', tinMainNav);

    function tinMainNav() {
        var directiveDefinitionObject = {
            restrict: 'E',
            templateUrl: 'app/components/main-nav.html'
        };
        return directiveDefinitionObject;
    }

})();
