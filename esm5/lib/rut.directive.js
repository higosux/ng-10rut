import { __decorate } from "tslib";
import { Directive, EventEmitter, Output } from '@angular/core';
import * as rutHelpers from 'rut-helpers';
import * as ɵngcc0 from '@angular/core';
var RutDirective = /** @class */ (function () {
    function RutDirective() {
        this.rutChange = new EventEmitter();
    }
    RutDirective.prototype.onFocus = function (ev) {
        var htmlInputElement = ev.target;
        htmlInputElement.value = rutHelpers.rutClean(htmlInputElement.value);
    };
    RutDirective.prototype.onBlur = function (ev) {
        var htmlInputElement = ev.target;
        htmlInputElement.value = rutHelpers.rutFormat(htmlInputElement.value) || '';
    };
    RutDirective.prototype.onChange = function (ev) {
        var htmlInputElement = ev.target;
        this.rutChange.emit(rutHelpers.rutClean(htmlInputElement.value));
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
export { RutDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsibmc5LXJ1dC9saWIvcnV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sS0FBSyxVQUFVLE1BQU0sYUFBYSxDQUFDOztBQVUxQztBQUNvQixJQUVsQjtBQUNRLFFBQU4sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ3hDLElBQUUsQ0FBQztBQUNILElBQ1MsOEJBQU8sR0FBZCxVQUFlLEVBQVM7QUFDMUIsUUFBSSxJQUFJLGdCQUFnQixHQUF3QyxFQUFFLENBQUMsTUFBTSxDQUFDO0FBQzFFLFFBQUksZ0JBQWdCLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekUsSUFBRSxDQUFDO0FBRUgsSUFBUyw2QkFBTSxHQUFiLFVBQWMsRUFBUztBQUN6QixRQUFJLElBQUksZ0JBQWdCLEdBQXdDLEVBQUUsQ0FBQyxNQUFNLENBQUM7QUFDMUUsUUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDaEYsSUFBRSxDQUFDO0FBRUgsSUFBUywrQkFBUSxHQUFmLFVBQWdCLEVBQVM7QUFDM0IsUUFBSSxJQUFJLGdCQUFnQixHQUF3QyxFQUFFLENBQUMsTUFBTSxDQUFDO0FBQzFFLFFBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3JFLElBQUUsQ0FBQztBQUNGLElBcEJXO0FBQWEsUUFBdEIsTUFBTSxFQUFFO0FBQUMsbURBQW9DO0lBRG5DLFlBQVksd0JBUnhCLFNBQVMsQ0FBQyxjQUNULFFBQVEsRUFBRSxhQUFhO1NBQ3ZCLElBQUksRUFBRSxrQkFDSixRQUFRLEVBQUUsZ0JBQWdCLGtCQUMxQixTQUFTLEVBQUUsaUJBQWlCLGtCQUM1QixTQUFTLEVBQUUsa0JBQWtCLGVBQzlCO0NBQ0YsQ0FBQyxRQUNXLFlBQVksQ0FxQnhCOzs7Ozs7Ozs7Ozs7OztvQkFDRDtBQUFDLElBREQsbUJBQUM7QUFDQSxDQURBLEFBckJELElBcUJDO0FBQ0QsU0F0QmEsWUFBWTtBQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBydXRIZWxwZXJzIGZyb20gJ3J1dC1oZWxwZXJzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Zvcm1hdFJ1dF0nLFxuICBob3N0OiB7XG4gICAgJyhibHVyKSc6ICdvbkJsdXIoJGV2ZW50KScsXG4gICAgJyhmb2N1cyknOiAnb25Gb2N1cygkZXZlbnQpJyxcbiAgICAnKGlucHV0KSc6ICdvbkNoYW5nZSgkZXZlbnQpJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgUnV0RGlyZWN0aXZlIHtcbiAgQE91dHB1dCgpIHB1YmxpYyBydXRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucnV0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICB9XG5cbiAgcHVibGljIG9uRm9jdXMoZXY6IEV2ZW50KSB7XG4gICAgbGV0IGh0bWxJbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD4gZXYudGFyZ2V0O1xuICAgIGh0bWxJbnB1dEVsZW1lbnQudmFsdWUgPSBydXRIZWxwZXJzLnJ1dENsZWFuKGh0bWxJbnB1dEVsZW1lbnQudmFsdWUpO1xuICB9XG5cbiAgcHVibGljIG9uQmx1cihldjogRXZlbnQpIHtcbiAgICBsZXQgaHRtbElucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PiBldi50YXJnZXQ7XG4gICAgaHRtbElucHV0RWxlbWVudC52YWx1ZSA9IHJ1dEhlbHBlcnMucnV0Rm9ybWF0KGh0bWxJbnB1dEVsZW1lbnQudmFsdWUpIHx8ICcnO1xuICB9XG5cbiAgcHVibGljIG9uQ2hhbmdlKGV2OiBFdmVudCkge1xuICAgIGxldCBodG1sSW5wdXRFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+IGV2LnRhcmdldDtcbiAgICB0aGlzLnJ1dENoYW5nZS5lbWl0KHJ1dEhlbHBlcnMucnV0Q2xlYW4oaHRtbElucHV0RWxlbWVudC52YWx1ZSkpO1xuICB9XG59XG4iXX0=