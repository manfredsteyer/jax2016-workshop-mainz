System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var OrtValidator;
    return {
        setters:[],
        execute: function() {
            OrtValidator = (function () {
                function OrtValidator() {
                }
                OrtValidator.validate = function (c) {
                    if (c.value == 'Graz'
                        || c.value == 'Hamburg'
                        || c.value == 'Frankfurt'
                        || c.value == 'Zürich'
                        || c.value == 'Wien') {
                        return {};
                    }
                    return {
                        ort: true
                    };
                };
                return OrtValidator;
            }());
            exports_1("OrtValidator", OrtValidator);
        }
    }
});
//# sourceMappingURL=ort-validator.js.map