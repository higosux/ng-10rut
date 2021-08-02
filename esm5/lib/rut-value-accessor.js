import { __decorate } from "tslib";
import { Directive, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { rutFormat } from 'rut-helpers';
import { ElementRef, Renderer2 } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
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
export { RutValueAccessor };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnV0LXZhbHVlLWFjY2Vzc29yLmpzIiwic291cmNlcyI6WyJuZzktcnV0L2xpYi9ydXQtdmFsdWUtYWNjZXNzb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXhDLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUV0RCxJQUFNLGtCQUFrQixHQUFRO0FBQ2hDLElBQUUsT0FBTyxFQUFFLGlCQUFpQjtBQUM1QixJQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGdCQUFnQixFQUFoQixDQUFnQixDQUFDO0FBQ2pELElBQUUsS0FBSyxFQUFFLElBQUk7QUFDYixDQUFDLENBQUM7QUFVRjtBQUFvRCxJQUNsRCwwQkFDVSxRQUFtQixFQUNuQixVQUFzQjtBQUNoQyxRQUZVLGFBQVEsR0FBUixRQUFRLENBQVc7QUFBQyxRQUNwQixlQUFVLEdBQVYsVUFBVSxDQUFZO0FBQUMsUUFHMUIsYUFBUSxHQUFRLFVBQUMsQ0FBQyxJQUFpQixDQUFDLENBQUM7QUFDOUMsUUFBUyxjQUFTLEdBQVEsY0FBa0IsQ0FBQyxDQUFDO0FBQzlDLElBSlEsQ0FBQztBQUNULElBSVMscUNBQVUsR0FBakIsVUFBa0IsS0FBVTtBQUFJLFFBQzlCLElBQUksZUFBZSxHQUFXLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDekQsUUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDdkYsSUFBRSxDQUFDO0FBRUgsSUFBUywyQ0FBZ0IsR0FBdkIsVUFBd0IsRUFBb0IsSUFBVSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDNUUsSUFBUSw0Q0FBaUIsR0FBeEIsVUFBeUIsRUFBYyxJQUFVLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4RTtBQUMyRCxnQkFmdEMsU0FBUztBQUM3QixnQkFBc0IsVUFBVTtBQUNqQztJQUpZLGdCQUFnQix3QkFSNUIsU0FBUyxDQUFDLGNBQ1QsUUFBUSxFQUFFLGtCQUFrQixjQUM1QixJQUFJLEVBQUUsa0JBQ0osYUFBYSxFQUFFLGtCQUFrQixrQkFDakM7RUFBUSxFQUFFLG1CQUFtQixlQUM5QixjQUNELFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLFdBQ2hDLENBQUMsUUFDVyxnQkFBZ0IsQ0FnQjVCOzs7Ozs7Ozs7Ozs7O3VHQUNEO0FBQUMsSUFERCx1QkFBQztBQUNBLENBREEsQUFoQkQsSUFnQkM7QUFDRCxTQWpCYSxnQkFBZ0I7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgcnV0Rm9ybWF0IH0gZnJvbSAncnV0LWhlbHBlcnMnO1xuXG5pbXBvcnQgeyBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuY29uc3QgUlVUX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBSdXRWYWx1ZUFjY2Vzc29yKSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdpbnB1dFtmb3JtYXRSdXRdJyxcbiAgaG9zdDoge1xuICAgICcocnV0Q2hhbmdlKSc6ICdvbkNoYW5nZSgkZXZlbnQpJyxcbiAgICAnKGJsdXIpJzogJ29uVG91Y2hlZCgkZXZlbnQpJyxcbiAgfSxcbiAgcHJvdmlkZXJzOiBbUlVUX1ZBTFVFX0FDQ0VTU09SXSxcbn0pXG5leHBvcnQgY2xhc3MgUnV0VmFsdWVBY2Nlc3NvciBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICApIHsgfVxuXG4gIHB1YmxpYyBvbkNoYW5nZTogYW55ID0gKF8pID0+IHsgLypFbXB0eSovIH07XG4gIHB1YmxpYyBvblRvdWNoZWQ6IGFueSA9ICgpID0+IHsgLypFbXB0eSovIH07XG5cbiAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGxldCBub3JtYWxpemVkVmFsdWU6IHN0cmluZyA9IHJ1dEZvcm1hdCh2YWx1ZSkgfHwgJyc7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgbm9ybWFsaXplZFZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKTogdm9pZCB7IHRoaXMub25DaGFuZ2UgPSBmbjsgfVxuICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfVxufVxuIl19