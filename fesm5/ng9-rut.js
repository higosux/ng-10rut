// @ts-ignore
import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Pipe, EventEmitter, Output, Directive, forwardRef, Renderer2, ElementRef, NgModule } from '@angular/core';
import { rutFormat, rutClean, rutValidate } from 'rut-helpers';
import * as ɵngcc0 from '@angular/core';
export * from 'rut-helpers';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

var Ng9RutService = /** @class */ (function () {
    function Ng9RutService() {
    }
    Ng9RutService.ɵprov = ɵɵdefineInjectable({ factory: function Ng9RutService_Factory() { return new Ng9RutService(); }, token: Ng9RutService, providedIn: "root" });
Ng9RutService.ɵfac = function Ng9RutService_Factory(t) { return new (t || Ng9RutService)(); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Ng9RutService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
    return Ng9RutService;
}());

var RutPipe = /** @class */ (function () {
    function RutPipe() {
    }
    RutPipe.prototype.transform = function (value) {
        return rutFormat(value);
    };
RutPipe.ɵfac = function RutPipe_Factory(t) { return new (t || RutPipe)(); };
RutPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "rut", type: RutPipe, pure: true });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RutPipe, [{
        type: Pipe,
        args: [{
                name: 'rut'
            }]
    }], function () { return []; }, null); })();
    return RutPipe;
}());

var RutDirective = /** @class */ (function () {
    function RutDirective() {
        this.rutChange = new EventEmitter();
    }
    RutDirective.prototype.onFocus = function (ev) {
        var htmlInputElement = ev.target;
        htmlInputElement.value = rutClean(htmlInputElement.value);
    };
    RutDirective.prototype.onBlur = function (ev) {
        var htmlInputElement = ev.target;
        htmlInputElement.value = rutFormat(htmlInputElement.value) || '';
    };
    RutDirective.prototype.onChange = function (ev) {
        var htmlInputElement = ev.target;
        this.rutChange.emit(rutClean(htmlInputElement.value));
    };
    __decorate([
        Output()
    ], RutDirective.prototype, "rutChange", void 0);
RutDirective.ɵfac = function RutDirective_Factory(t) { return new (t || RutDirective)(); };
RutDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: RutDirective, selectors: [["", "formatRut", ""]], hostBindings: function RutDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("blur", function RutDirective_blur_HostBindingHandler($event) { return ctx.onBlur($event); })("focus", function RutDirective_focus_HostBindingHandler($event) { return ctx.onFocus($event); })("input", function RutDirective_input_HostBindingHandler($event) { return ctx.onChange($event); });
    } }, outputs: { rutChange: "rutChange" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RutDirective, [{
        type: Directive,
        args: [{
                selector: '[formatRut]',
                host: {
                    '(blur)': 'onBlur($event)',
                    '(focus)': 'onFocus($event)',
                    '(input)': 'onChange($event)'
                }
            }]
    }], function () { return []; }, { rutChange: [{
            type: Output
        }] }); })();
    return RutDirective;
}());

function validateRutFactory(rutValidate) {
    return function (c) {
        if (!c.value) {
            return null;
        }
        return rutValidate(c.value) ? null : { invalidRut: true };
    };
}
var RutValidator = /** @class */ (function () {
    function RutValidator() {
        this.validator = validateRutFactory(rutValidate);
    }
    RutValidator_1 = RutValidator;
    RutValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    var RutValidator_1;
RutValidator.ɵfac = function RutValidator_Factory(t) { return new (t || RutValidator)(); };
RutValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: RutValidator, selectors: [["", "validateRut", "", "ngModel", ""], ["", "validateRut", "", "formControl", ""]], features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: NG_VALIDATORS, useExisting: forwardRef(function () { return RutValidator_1; }), multi: true },
        ])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RutValidator, [{
        type: Directive,
        args: [{
                selector: '[validateRut][ngModel],[validateRut][formControl]',
                providers: [
                    { provide: NG_VALIDATORS, useExisting: forwardRef(function () { return RutValidator_1; }), multi: true },
                ]
            }]
    }], function () { return []; }, null); })();
    return RutValidator;
}());

var RUT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return RutValueAccessor; }),
    multi: true,
};
var RutValueAccessor = /** @class */ (function () {
    function RutValueAccessor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    RutValueAccessor.prototype.writeValue = function (value) {
        var normalizedValue = rutFormat(value) || '';
        this.renderer.setProperty(this.elementRef.nativeElement, 'value', normalizedValue);
    };
    RutValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    RutValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    RutValueAccessor.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
RutValueAccessor.ɵfac = function RutValueAccessor_Factory(t) { return new (t || RutValueAccessor)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
RutValueAccessor.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: RutValueAccessor, selectors: [["input", "formatRut", ""]], hostBindings: function RutValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("rutChange", function RutValueAccessor_rutChange_HostBindingHandler($event) { return ctx.onChange($event); })("blur", function RutValueAccessor_blur_HostBindingHandler($event) { return ctx.onTouched($event); });
    } }, features: [ɵngcc0.ɵɵProvidersFeature([RUT_VALUE_ACCESSOR])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RutValueAccessor, [{
        type: Directive,
        args: [{
                selector: 'input[formatRut]',
                host: {
                    '(rutChange)': 'onChange($event)',
                    '(blur)': 'onTouched($event)'
                },
                providers: [RUT_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }]; }, null); })();
    return RutValueAccessor;
}());

var Ng9RutModule = /** @class */ (function () {
    function Ng9RutModule() {
    }
Ng9RutModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: Ng9RutModule });
Ng9RutModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function Ng9RutModule_Factory(t) { return new (t || Ng9RutModule)(); }, providers: [
        RutValidator,
    ] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(Ng9RutModule, { declarations: [RutPipe, RutDirective, RutValidator, RutValueAccessor], exports: [RutPipe, RutDirective, RutValidator, RutValueAccessor] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Ng9RutModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    RutPipe,
                    RutDirective,
                    RutValidator,
                    RutValueAccessor,
                ],
                providers: [
                    RutValidator,
                ],
                exports: [
                    RutPipe,
                    RutDirective,
                    RutValidator,
                    RutValueAccessor,
                ]
            }]
    }], function () { return []; }, null); })();
    return Ng9RutModule;
}());

/*
 * Public API Surface of ng9-rut
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Ng9RutModule, Ng9RutService, RutDirective, RutPipe, RutValidator, RutValueAccessor, validateRutFactory };

//# sourceMappingURL=ng9-rut.js.map