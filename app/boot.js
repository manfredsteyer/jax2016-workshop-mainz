System.register(['angular2/platform/browser', './app', 'angular2/http', 'angular2/router', 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_1, http_1, router_1;
    var providers;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {}],
        execute: function() {
            providers = [
                // FlugService, // FlugService --> FlugService 
                // provide(FlugService, { useClass: FlugService } )
                // FlugService --> MockFlugService
                // FlugService --> ExtFlugService
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS
            ];
            browser_1.bootstrap(app_1.AppComponent, providers);
        }
    }
});
//# sourceMappingURL=boot.js.map