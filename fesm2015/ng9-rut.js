// @ts-ignore
import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Pipe, EventEmitter, Output, Directive, forwardRef, Renderer2, ElementRef, NgModule } from '@angular/core';
import { rutFormat, rutClean, rutValidate } from 'rut-helpers';
export * from 'rut-helpers';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

let Ng9RutService = class Ng9RutService {
    constructor() { }
};
Ng9RutService.ɵprov = ɵɵdefineInjectable({ factory: function Ng9RutService_Factory() { return new Ng9RutService(); }, token: Ng9RutService, providedIn: "root" });
Ng9RutService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], Ng9RutService);

let RutPipe = class RutPipe {
    transform(value) {
        return rutFormat(value);
    }
};
RutPipe = __decorate([
    Pipe({
        name: 'rut',
    })
], RutPipe);

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
__decorate([
    Output()
], RutDirective.prototype, "rutChange", void 0);
RutDirective = __decorate([
    Directive({
        selector: '[formatRut]',
        host: {
            '(blur)': 'onBlur($event)',
            '(focus)': 'onFocus($event)',
            '(input)': 'onChange($event)',
        },
    })
], RutDirective);

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
RutValidator = RutValidator_1 = __decorate([
    Directive({
        selector: '[validateRut][ngModel],[validateRut][formControl]',
        providers: [
            { provide: NG_VALIDATORS, useExisting: forwardRef(() => RutValidator_1), multi: true },
        ],
    })
], RutValidator);

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
RutValueAccessor.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
RutValueAccessor = __decorate([
    Directive({
        selector: 'input[formatRut]',
        host: {
            '(rutChange)': 'onChange($event)',
            '(blur)': 'onTouched($event)',
        },
        providers: [RUT_VALUE_ACCESSOR],
    })
], RutValueAccessor);

let Ng9RutModule = class Ng9RutModule {
};
Ng9RutModule = __decorate([
    NgModule({
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
        ],
    })
], Ng9RutModule);

/*
 * Public API Surface of ng9-rut
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Ng9RutModule, Ng9RutService, RutDirective, RutPipe, RutValidator, RutValueAccessor, validateRutFactory };
//# sourceMappingURL=ng9-rut.js.map
