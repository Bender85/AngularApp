(function () {
    'use strict';
    angular
        .module('angApp')
        .component('formValidation', {
            templateUrl: '/app/views/validation.html',
            controller: validationController,
            bindings: {
                valid: '='
            }
        });

        function validationController() {
            var $ctrl = this;
        }
})();
