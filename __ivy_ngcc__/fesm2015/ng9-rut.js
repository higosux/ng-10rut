// @ts-ignore
import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Pipe, EventEmitter, Output, Directive, forwardRef, Renderer2, ElementRef, NgModule } from '@angular/core';
import { rutFormat, rutClean, rutValidate } from 'rut-helpers';
import * as ɵngcc0 from '@angular/core';
export * from 'rut-helpers';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

let Ng9RutService = class Ng9RutService {
    constructor() { }
};
Ng9RutService.ɵfac = function Ng9RutService_Factory(t) { return new (t || Ng9RutService)(); };
Ng9RutService.ɵprov = ɵɵdefineInjectable({ factory: function Ng9RutService_Factory() { return new Ng9RutService(); }, token: Ng9RutService, providedIn: "root" });

let RutPipe = class RutPipe {
    transform(value) {
        return rutFormat(value);
    }
};
RutPipe.ɵfac = function RutPipe_Factory(t) { return new (t || RutPipe)(); };
RutPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "rut", type: RutPipe, pure: true });

let RutDirective = class RutDirective {
    constructor() {
        this.rutChange = new EventEmitter();
    }
    onFocus(ev) {
        let htmlInputElement = ev.target;
        htmlInputElement.value = rutClean(htmlInputElement.value);
    }
    onBlur(ev) {
        let htmlInputElement = ev.target;
        htmlInputElement.value = rutFormat(htmlInputElement.value) || '';
    }
    onChange(ev) {
        let htmlInputElement = ev.target;
        this.rutChange.emit(rutClean(htmlInputElement.value));
    }
};
RutDirective.ɵfac = function RutDirective_Factory(t) { return new (t || RutDirective)(); };
RutDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: RutDirective, selectors: [["", "formatRut", ""]], hostBindings: function RutDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("blur", function RutDirective_blur_HostBindingHandler($event) { return ctx.onBlur($event); })("focus", function RutDirective_focus_HostBindingHandler($event) { return ctx.onFocus($event); })("input", function RutDirective_input_HostBindingHandler($event) { return ctx.onChange($event); });
    } }, outputs: { rutChange: "rutChange" } });
__decorate([
    Output()
], RutDirective.prototype, "rutChange", void 0);

var RutValidator_1;
function validateRutFactory(rutValidate) {
    return (c) => {
        if (!c.value) {
            return null;
        }
        return rutValidate(c.value) ? null : { invalidRut: true };
    };
}
let RutValidator = RutValidator_1 = class RutValidator {
    constructor() {
        this.validator = validateRutFactory(rutValidate);
    }
    validate(c) {
        return this.validator(c);
    }
};
RutValidator.ɵfac = function RutValidator_Factory(t) { return new (t || RutValidator)(); };
RutValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: RutValidator, selectors: [["", "validateRut", "", "ngModel", ""], ["", "validateRut", "", "formControl", ""]], features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: NG_VALIDATORS, useExisting: forwardRef(() => RutValidator_1), multi: true },
        ])] });

const RUT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RutValueAccessor),
    multi: true,
};
let RutValueAccessor = class RutValueAccessor {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    writeValue(value) {
        let normalizedValue = rutFormat(value) || '';
        this.renderer.setProperty(this.elementRef.nativeElement, 'value', normalizedValue);
    }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
};
RutValueAccessor.ɵfac = function RutValueAccessor_Factory(t) { return new (t || RutValueAccessor)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
RutValueAccessor.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: RutValueAccessor, selectors: [["input", "formatRut", ""]], hostBindings: function RutValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("rutChange", function RutValueAccessor_rutChange_HostBindingHandler($event) { return ctx.onChange($event); })("blur", function RutValueAccessor_blur_HostBindingHandler($event) { return ctx.onTouched($event); });
    } }, features: [ɵngcc0.ɵɵProvidersFeature([RUT_VALUE_ACCESSOR])] });
RutValueAccessor.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];

let Ng9RutModule = class Ng9RutModule {
};
Ng9RutModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: Ng9RutModule });
Ng9RutModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function Ng9RutModule_Factory(t) { return new (t || Ng9RutModule)(); }, providers: [
        RutValidator,
    ] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Ng9RutService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RutPipe, [{
        type: Pipe,
        args: [{
                name: 'rut'
            }]
    }], null, null); })();
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RutValidator, [{
        type: Directive,
        args: [{
                selector: '[validateRut][ngModel],[validateRut][formControl]',
                providers: [
                    { provide: NG_VALIDATORS, useExisting: forwardRef(() => RutValidator_1), multi: true },
                ]
            }]
    }], function () { return []; }, null); })();
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
    }], null, null); })();

/*
 * Public API Surface of ng9-rut
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Ng9RutModule, Ng9RutService, RutDirective, RutPipe, RutValidator, RutValueAccessor, validateRutFactory };

//# sourceMappingURL=ng9-rut.js.map