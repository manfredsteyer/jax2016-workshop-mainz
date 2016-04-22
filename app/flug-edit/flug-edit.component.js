System.register(['angular2/core', 'angular2/router', '../services/flug.service'], function(exports_1, context_1) {
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
    var core_1, router_1, flug_service_1;
    var FlugEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (flug_service_1_1) {
                flug_service_1 = flug_service_1_1;
            }],
        execute: function() {
            FlugEditComponent = (function () {
                function FlugEditComponent(flugService, routeParams) {
                    var _this = this;
                    this.flugService = flugService;
                    this.info = "FlugEdit";
                    this.id = routeParams.get('id');
                    this.flugService
                        .findById(this.id)
                        .subscribe(function (flug) {
                        _this.flug = flug;
                        _this.message = "";
                    }, function (err) {
                        console.error(err);
                        _this.message = err.text();
                    });
                }
                FlugEditComponent.prototype.save = function () {
                    var _this = this;
                    this.flugService
                        .save(this.flug)
                        .subscribe(function (flug) {
                        _this.flug = flug;
                        _this.message = "";
                    }, function (err) {
                        console.error(err);
                        _this.message = err.text();
                    });
                };
                FlugEditComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/flug-edit/flug-edit.component.html'
                    }), 
                    __metadata('design:paramtypes', [flug_service_1.FlugService, router_1.RouteParams])
                ], FlugEditComponent);
                return FlugEditComponent;
            }());
            exports_1("FlugEditComponent", FlugEditComponent);
        }
    }
});
//# sourceMappingURL=flug-edit.component.js.map