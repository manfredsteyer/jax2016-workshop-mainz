System.register(['angular2/core', '../services/flug.service', '../pipes/ort-pipe', '../flug-card/flug-card.component', '../validators/ort-validator.directive', '../validators/ort-validator-async.directive'], function(exports_1, context_1) {
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
    var core_1, flug_service_1, ort_pipe_1, flug_card_component_1, ort_validator_directive_1, ort_validator_async_directive_1;
    var MY_VALIDATION_DIRECTIVES, MY_PROVIDERS, MY_DIRECTIVES, FlugSuchenComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (flug_service_1_1) {
                flug_service_1 = flug_service_1_1;
            },
            function (ort_pipe_1_1) {
                ort_pipe_1 = ort_pipe_1_1;
            },
            function (flug_card_component_1_1) {
                flug_card_component_1 = flug_card_component_1_1;
            },
            function (ort_validator_directive_1_1) {
                ort_validator_directive_1 = ort_validator_directive_1_1;
            },
            function (ort_validator_async_directive_1_1) {
                ort_validator_async_directive_1 = ort_validator_async_directive_1_1;
            }],
        execute: function() {
            MY_VALIDATION_DIRECTIVES = [ort_validator_directive_1.OrtValidatorDirective, ort_validator_async_directive_1.OrtValidatorAsyncDirective];
            MY_PROVIDERS = [flug_service_1.FlugService];
            MY_DIRECTIVES = [flug_card_component_1.FlugCardComponent, MY_VALIDATION_DIRECTIVES];
            FlugSuchenComponent = (function () {
                /*
                private http: Http;
                
                constructor(http: Http) {
                    this.http = http;
                }
                */
                function FlugSuchenComponent(flugService) {
                    this.flugService = flugService;
                    this.von = "Graz";
                    this.nach = "Hamburg";
                    this.fluege = [];
                }
                FlugSuchenComponent.prototype.suchen = function () {
                    var _this = this;
                    this.flugService
                        .find(this.von, this.nach) // <-- Observable
                        .subscribe(function (fluege) {
                        _this.fluege = fluege;
                    }, function (err) {
                        console.error(err);
                    });
                };
                FlugSuchenComponent.prototype.select = function (flug) {
                    this.selectedFlug = flug;
                };
                FlugSuchenComponent = __decorate([
                    core_1.Component({
                        selector: 'flug-suchen',
                        templateUrl: 'app/flug-suchen/flug-suchen.component.html',
                        providers: [MY_PROVIDERS],
                        directives: [MY_DIRECTIVES],
                        styleUrls: ['app/flug-suchen/flug-suchen.component.css'],
                        pipes: [ort_pipe_1.OrtPipe]
                    }), 
                    __metadata('design:paramtypes', [flug_service_1.FlugService])
                ], FlugSuchenComponent);
                return FlugSuchenComponent;
            }());
            exports_1("FlugSuchenComponent", FlugSuchenComponent);
        }
    }
});
//# sourceMappingURL=flug-suchen.component.js.map