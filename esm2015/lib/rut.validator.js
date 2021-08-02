import * as ɵngcc0 from '@angular/core';
var RutValidator_1;
import { __decorate } from "tslib";
import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { rutValidate } from 'rut-helpers';
export function validateRutFactory(rutValidate) {
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RutValidator, [{
        type: Directive,
        args: [{
                selector: '[validateRut][ngModel],[validateRut][formControl]',
                providers: [
                    { provide: NG_VALIDATORS, useExisting: forwardRef(() => RutValidator_1), multi: true },
                ]
            }]
    }], function () { return []; }, null); })();
export { RutValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnV0LnZhbGlkYXRvci5qcyIsInNvdXJjZXMiOlsibmc5LXJ1dC9saWIvcnV0LnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFlLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxQyxNQUFNLFVBQVUsa0JBQWtCLENBQUMsV0FBcUI7QUFDeEQsSUFBRSxPQUFPLENBQUMsQ0FBYyxFQUFFLEVBQUU7QUFBRyxRQUMzQixJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRTtBQUNsQixZQUFNLE9BQU8sSUFBSSxDQUFDO0FBQ2xCLFNBQUs7QUFDTCxRQUFJLE9BQU8sV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUM5RCxJQUFFLENBQUMsQ0FBQztBQUNKLENBQUM7QUFRRCxJQUFhLFlBQVksb0JBQXpCLE1BQWEsWUFBWTtBQUN6QixJQUVFO0FBQ0YsUUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3JELElBQUUsQ0FBQztBQUNILElBQ1MsUUFBUSxDQUFDLENBQWM7QUFDaEMsUUFBSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0IsSUFBRSxDQUFDO0FBQ0gsQ0FBQyxDQUFBO0FBVlksWUFBWSxxQ0FOeEIsU0FBUyxDQUFDLFVBQ1QsUUFBUSxFQUFFO3NDQUFtRCxVQUM3RCxTQUFTLEVBQUUsY0FDVCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFZLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQ3JGLE9BQ0YsQ0FBQyxJQUNXLFlBQVksQ0FVeEI7Ozs7Ozs7Ozs7O2dEQUNEO0FBQUMsU0FYWSxZQUFZO0FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IHJ1dFZhbGlkYXRlIH0gZnJvbSAncnV0LWhlbHBlcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVSdXRGYWN0b3J5KHJ1dFZhbGlkYXRlOiBGdW5jdGlvbikge1xuICByZXR1cm4gKGM6IEZvcm1Db250cm9sKSA9PiB7ICAgIFxuICAgIGlmICghYy52YWx1ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBydXRWYWxpZGF0ZShjLnZhbHVlKSA/IG51bGwgOiB7IGludmFsaWRSdXQ6IHRydWUgfTtcbiAgfTtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3ZhbGlkYXRlUnV0XVtuZ01vZGVsXSxbdmFsaWRhdGVSdXRdW2Zvcm1Db250cm9sXScsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogTkdfVkFMSURBVE9SUywgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUnV0VmFsaWRhdG9yKSwgbXVsdGk6IHRydWUgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUnV0VmFsaWRhdG9yIHtcbiAgcHJpdmF0ZSB2YWxpZGF0b3I6IEZ1bmN0aW9uO1xuICBcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy52YWxpZGF0b3IgPSB2YWxpZGF0ZVJ1dEZhY3RvcnkocnV0VmFsaWRhdGUpO1xuICB9XG4gIFxuICBwdWJsaWMgdmFsaWRhdGUoYzogRm9ybUNvbnRyb2wpIHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IoYyk7XG4gIH1cbn1cbiJdfQ==