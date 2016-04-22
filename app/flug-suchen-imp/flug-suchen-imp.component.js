System.register(['angular2/core', '../services/flug.service', '../pipes/ort-pipe', '../flug-card/flug-card.component', 'angular2/common', '../validators/ort-validator', '../validators/ort-validator-async'], function(exports_1, context_1) {
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
    var core_1, flug_service_1, ort_pipe_1, flug_card_component_1, common_1, ort_validator_1, ort_validator_async_1;
    var MY_PROVIDERS, MY_DIRECTIVES, FlugSuchenImpComponent;
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
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ort_validator_1_1) {
                ort_validator_1 = ort_validator_1_1;
            },
            function (ort_validator_async_1_1) {
                ort_validator_async_1 = ort_validator_async_1_1;
            }],
        execute: function() {
            MY_PROVIDERS = [flug_service_1.FlugService];
            MY_DIRECTIVES = [flug_card_component_1.FlugCardComponent];
            FlugSuchenImpComponent = (function () {
                function FlugSuchenImpComponent(flugService, fb) {
                    this.flugService = flugService;
                    this.fb = fb;
                    this.fluege = [];
                    this.filter = fb.group({
                        von: [
                            'Graz',
                            common_1.Validators.compose([
                                // control --> { required: false }
                                common_1.Validators.required,
                                common_1.Validators.maxLength(30),
                                common_1.Validators.minLength(3),
                                ort_validator_1.OrtValidator.validate
                            ]),
                            common_1.Validators.composeAsync([
                                ort_validator_async_1.OrtValidatorAsync.validate
                            ])
                        ],
                        nach: ['Hamburg']
                    });
                    this.filter.valueChanges.subscribe(function (info) {
                        console.debug(info);
                    });
                }
                FlugSuchenImpComponent.prototype.suchen = function () {
                    var _this = this;
                    var von = this.filter.value.von;
                    var nach = this.filter.value.nach;
                    this.flugService
                        .find(von, nach) // <-- Observable
                        .subscribe(function (fluege) {
                        _this.fluege = fluege;
                    }, function (err) {
                        console.error(err);
                    });
                };
                FlugSuchenImpComponent.prototype.select = function (flug) {
                    this.selectedFlug = flug;
                };
                FlugSuchenImpComponent = __decorate([
                    core_1.Component({
                        selector: 'flug-suchen',
                        templateUrl: 'app/flug-suchen-imp/flug-suchen-imp.component.html',
                        providers: [MY_PROVIDERS],
                        directives: [MY_DIRECTIVES],
                        styleUrls: ['app/flug-suchen-imp/flug-suchen-imp.component.css'],
                        pipes: [ort_pipe_1.OrtPipe]
                    }), 
                    __metadata('design:paramtypes', [flug_service_1.FlugService, common_1.FormBuilder])
                ], FlugSuchenImpComponent);
                return FlugSuchenImpComponent;
            }());
            exports_1("FlugSuchenImpComponent", FlugSuchenImpComponent);
        }
    }
});
//# sourceMappingURL=flug-suchen-imp.component.js.map