import { __decorate } from "tslib";
import { Directive, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { rutFormat } from 'rut-helpers';
import { ElementRef, Renderer2 } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
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
export { RutValueAccessor };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnV0LXZhbHVlLWFjY2Vzc29yLmpzIiwic291cmNlcyI6WyJuZzktcnV0L2xpYi9ydXQtdmFsdWUtYWNjZXNzb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXhDLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUV0RCxNQUFNLGtCQUFrQixHQUFRO0FBQ2hDLElBQUUsT0FBTyxFQUFFLGlCQUFpQjtBQUM1QixJQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7QUFDakQsSUFBRSxLQUFLLEVBQUUsSUFBSTtBQUNiLENBQUMsQ0FBQztBQVVGLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0FBQUcsSUFDOUIsWUFDVSxRQUFtQixFQUNuQixVQUFzQjtBQUNoQyxRQUZVLGFBQVEsR0FBUixRQUFRLENBQVc7QUFBQyxRQUNwQixlQUFVLEdBQVYsVUFBVSxDQUFZO0FBQUMsUUFHMUIsYUFBUSxHQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBYSxDQUFDLENBQUM7QUFDOUMsUUFBUyxjQUFTLEdBQVEsR0FBRyxFQUFFLEdBQWEsQ0FBQyxDQUFDO0FBQzlDLElBSlEsQ0FBQztBQUNULElBSVMsVUFBVSxDQUFDLEtBQVU7QUFBSSxRQUM5QixJQUFJLGVBQWUsR0FBVyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3pELFFBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ3ZGLElBQUUsQ0FBQztBQUNILElBQ1MsZ0JBQWdCLENBQUMsRUFBb0IsSUFBVSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0UsSUFBUyxpQkFBaUIsQ0FBQyxFQUFjLElBQVUsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3pFLENBQUM7Ozs7d0VBQUE7QUFDRDtBQUEwQyxZQWZwQixTQUFTO0FBQzdCLFlBQXNCLFVBQVU7QUFDakM7QUFKWSxnQkFBZ0Isb0JBUjVCLFNBQVMsQ0FBQyxVQUNULFFBQVEsRUFBRTtTQUFrQixVQUM1QixJQUFJO0FBQUUsY0FDSjtVQUFhLEVBQUUsa0JBQWtCLGNBQ2pDO01BQVEsRUFBRTtHQUFtQixXQUM5QixVQUNELFNBQVMsRUFBRSxDQUFDLGtCQUFrQjtBQUFDLE9BQ2hDLENBQUMsSUFDVyxnQkFBZ0IsQ0FnQjVCOzs7O3VHQUNEO0FBQUMsU0FqQlksZ0JBQWdCO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IHJ1dEZvcm1hdCB9IGZyb20gJ3J1dC1oZWxwZXJzJztcblxuaW1wb3J0IHsgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmNvbnN0IFJVVF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUnV0VmFsdWVBY2Nlc3NvciksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnaW5wdXRbZm9ybWF0UnV0XScsXG4gIGhvc3Q6IHtcbiAgICAnKHJ1dENoYW5nZSknOiAnb25DaGFuZ2UoJGV2ZW50KScsXG4gICAgJyhibHVyKSc6ICdvblRvdWNoZWQoJGV2ZW50KScsXG4gIH0sXG4gIHByb3ZpZGVyczogW1JVVF9WQUxVRV9BQ0NFU1NPUl0sXG59KVxuZXhwb3J0IGNsYXNzIFJ1dFZhbHVlQWNjZXNzb3IgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgKSB7IH1cblxuICBwdWJsaWMgb25DaGFuZ2U6IGFueSA9IChfKSA9PiB7IC8qRW1wdHkqLyB9O1xuICBwdWJsaWMgb25Ub3VjaGVkOiBhbnkgPSAoKSA9PiB7IC8qRW1wdHkqLyB9O1xuXG4gIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBsZXQgbm9ybWFsaXplZFZhbHVlOiBzdHJpbmcgPSBydXRGb3JtYXQodmFsdWUpIHx8ICcnO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIG5vcm1hbGl6ZWRWYWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLm9uQ2hhbmdlID0gZm47IH1cbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMub25Ub3VjaGVkID0gZm47IH1cbn1cbiJdfQ==