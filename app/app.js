System.register(['angular2/core', 'angular2/router', './flug-suchen/flug-suchen.component', './passagier-suchen/passagier-suchen.component', './home/home.component', './flug-edit/flug-edit.component', './services/flug.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, flug_suchen_component_1, passagier_suchen_component_1, home_component_1, flug_edit_component_1, flug_service_1;
    var MY_PROVIDERS, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (flug_suchen_component_1_1) {
                flug_suchen_component_1 = flug_suchen_component_1_1;
            },
            function (passagier_suchen_component_1_1) {
                passagier_suchen_component_1 = passagier_suchen_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (flug_edit_component_1_1) {
                flug_edit_component_1 = flug_edit_component_1_1;
            },
            function (flug_service_1_1) {
                flug_service_1 = flug_service_1_1;
            }],
        execute: function() {
            MY_PROVIDERS = [flug_service_1.FlugService];
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'app/app.html',
                        providers: [MY_PROVIDERS],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: home_component_1.HomeComponent, name: 'Home', useAsDefault: true },
                        { path: '/flug-suchen', component: flug_suchen_component_1.FlugSuchenComponent, name: 'FlugSuchen' },
                        { path: '/flug-edit/:id', component: flug_edit_component_1.FlugEditComponent, name: 'FlugEdit' },
                        { path: '/passagier-suchen', component: passagier_suchen_component_1.PassagierSuchenComponent, name: 'PassagierSuchen' }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.js.map