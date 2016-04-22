System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var OrtValidatorAsync;
    return {
        setters:[],
        execute: function() {
            // c --> Promise
            OrtValidatorAsync = (function () {
                function OrtValidatorAsync() {
                }
                OrtValidatorAsync.validate = function (c) {
                    return new Promise(function (resolve) {
                        setTimeout(function () {
                            if (c.value == 'Graz'
                                || c.value == 'Hamburg'
                                || c.value == 'Frankfurt'
                                || c.value == 'Zürich') {
                                resolve({});
                            }
                            else {
                                resolve({ ortAsync: true });
                            }
                        }, 3000);
                    });
                };
                return OrtValidatorAsync;
            }());
            exports_1("OrtValidatorAsync", OrtValidatorAsync);
        }
    }
});
//# sourceMappingURL=ort-validator-async.js.map