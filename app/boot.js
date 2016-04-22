System.register(['angular2/platform/browser', './flug-suchen/flug-suchen.component', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, flug_suchen_component_1, http_1;
    var providers;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (flug_suchen_component_1_1) {
                flug_suchen_component_1 = flug_suchen_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            providers = [
                // FlugService, // FlugService --> FlugService 
                // provide(FlugService, { useClass: FlugService } )
                // FlugService --> MockFlugService
                // FlugService --> ExtFlugService
                http_1.HTTP_PROVIDERS
            ];
            browser_1.bootstrap(flug_suchen_component_1.FlugSuchenComponent, providers);
        }
    }
});
//# sourceMappingURL=boot.js.map