import { __decorate } from "tslib";
import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { rutValidate } from 'rut-helpers';
import * as ɵngcc0 from '@angular/core';
export function validateRutFactory(rutValidate) {
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
export { RutValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnV0LnZhbGlkYXRvci5qcyIsInNvdXJjZXMiOlsibmc5LXJ1dC9saWIvcnV0LnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBZSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBRTFDLE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxXQUFxQjtBQUN4RCxJQUFFLE9BQU8sVUFBQyxDQUFjO0FBQUksUUFDeEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUU7QUFDbEIsWUFBTSxPQUFPLElBQUksQ0FBQztBQUNsQixTQUFLO0FBQ0wsUUFBSSxPQUFPLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFDOUQsSUFBRSxDQUFDLENBQUM7QUFDSixDQUFDO0FBUUQ7QUFDb0IsSUFFbEI7QUFDUSxRQUFOLElBQUksQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDckQsSUFBRSxDQUFDO0FBQ0gscUJBTmEsWUFBWTtBQUFFLElBT2xCLCtCQUFRLEdBQWYsVUFBZ0IsQ0FBYztBQUNoQyxRQUFJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QixJQUFFLENBQUM7QUFDRjtJQVZZLFlBQVkseUNBTnhCLFNBQVMsQ0FBQyxjQUNULFFBQVEsRUFBRTtrREFBbUQsY0FDN0QsU0FBUyxFQUFFLGtCQUNULEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxjQUFZLEVBQVosQ0FBWSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtTQUNyRixXQUNGLENBQUMsUUFDVyxZQUFZLENBVXhCOzs7Ozs7Ozs7O2dEQUNEO0FBQUMsSUFERCxtQkFBQztBQUNBLENBREEsQUFWRCxJQVVDO0FBQ0QsU0FYYSxZQUFZO0FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IHJ1dFZhbGlkYXRlIH0gZnJvbSAncnV0LWhlbHBlcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVSdXRGYWN0b3J5KHJ1dFZhbGlkYXRlOiBGdW5jdGlvbikge1xuICByZXR1cm4gKGM6IEZvcm1Db250cm9sKSA9PiB7ICAgIFxuICAgIGlmICghYy52YWx1ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBydXRWYWxpZGF0ZShjLnZhbHVlKSA/IG51bGwgOiB7IGludmFsaWRSdXQ6IHRydWUgfTtcbiAgfTtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3ZhbGlkYXRlUnV0XVtuZ01vZGVsXSxbdmFsaWRhdGVSdXRdW2Zvcm1Db250cm9sXScsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogTkdfVkFMSURBVE9SUywgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUnV0VmFsaWRhdG9yKSwgbXVsdGk6IHRydWUgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUnV0VmFsaWRhdG9yIHtcbiAgcHJpdmF0ZSB2YWxpZGF0b3I6IEZ1bmN0aW9uO1xuICBcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy52YWxpZGF0b3IgPSB2YWxpZGF0ZVJ1dEZhY3RvcnkocnV0VmFsaWRhdGUpO1xuICB9XG4gIFxuICBwdWJsaWMgdmFsaWRhdGUoYzogRm9ybUNvbnRyb2wpIHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IoYyk7XG4gIH1cbn1cbiJdfQ==