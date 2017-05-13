(function() {
    'use strict';

    angular
        .module('angApp')
        .component('mainNav', {
            templateUrl: 'app/components/main-nav.html',
            // transclude: true,
            // replace: true,
            // controller: mainController,
            bindings: {
                nav: '='
            }
        });
})();
