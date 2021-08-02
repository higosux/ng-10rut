import { __decorate } from "tslib";
import { Directive, EventEmitter, Output } from '@angular/core';
import * as rutHelpers from 'rut-helpers';
import * as ɵngcc0 from '@angular/core';
let RutDirective = class RutDirective {
    constructor() {
        this.rutChange = new EventEmitter();
    }
    onFocus(ev) {
        let htmlInputElement = ev.target;
        htmlInputElement.value = rutHelpers.rutClean(htmlInputElement.value);
    }
    onBlur(ev) {
        let htmlInputElement = ev.target;
        htmlInputElement.value = rutHelpers.rutFormat(htmlInputElement.value) || '';
    }
    onChange(ev) {
        let htmlInputElement = ev.target;
        this.rutChange.emit(rutHelpers.rutClean(htmlInputElement.value));
    }
};
RutDirective.ɵfac = function RutDirective_Factory(t) { return new (t || RutDirective)(); };
RutDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: RutDirective, selectors: [["", "formatRut", ""]], hostBindings: function RutDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("blur", function RutDirective_blur_HostBindingHandler($event) { return ctx.onBlur($event); })("focus", function RutDirective_focus_HostBindingHandler($event) { return ctx.onFocus($event); })("input", function RutDirective_input_HostBindingHandler($event) { return ctx.onChange($event); });
    } }, outputs: { rutChange: "rutChange" } });
__decorate([
    Output()
], RutDirective.prototype, "rutChange", void 0);
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
export { RutDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsibmc5LXJ1dC9saWIvcnV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sS0FBSyxVQUFVLE1BQU0sYUFBYSxDQUFDOztBQVUxQyxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0FBQ3pCLElBRUU7QUFDRixRQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUN4QyxJQUFFLENBQUM7QUFDSCxJQUNTLE9BQU8sQ0FBQyxFQUFTO0FBQzFCLFFBQUksSUFBSSxnQkFBZ0IsR0FBd0MsRUFBRSxDQUFDLE1BQU0sQ0FBQztBQUMxRSxRQUFJLGdCQUFnQixDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3pFLElBQUUsQ0FBQztBQUNILElBQ1MsTUFBTSxDQUFDLEVBQVM7QUFDekIsUUFBSSxJQUFJLGdCQUFnQixHQUF3QyxFQUFFLENBQUMsTUFBTSxDQUFDO0FBQzFFLFFBQUksZ0JBQWdCLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2hGLElBQUUsQ0FBQztBQUNILElBQ1MsUUFBUSxDQUFDLEVBQVM7QUFDM0IsUUFBSSxJQUFJLGdCQUFnQixHQUF3QyxFQUFFLENBQUMsTUFBTSxDQUFDO0FBQzFFLFFBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3JFLElBQUUsQ0FBQztBQUNILENBQUM7Ozs7Z0RBQUE7QUFwQlc7QUFBYSxJQUF0QixNQUFNLEVBQUU7QUFBQywrQ0FBb0M7QUFEbkMsWUFBWSxvQkFSeEIsU0FBUyxDQUFDLFVBQ1QsUUFBUSxFQUFFO0lBQWEsVUFDdkIsSUFBSSxFQUFFO1NBQ0o7QUFBUSxFQUFFLGdCQUFnQixjQUMxQjtBQUFTLEVBQUUsaUJBQWlCO1NBQzVCLFNBQVMsRUFBRSxrQkFBa0I7Q0FDOUIsT0FDRixDQUFDLElBQ1csWUFBWSxDQXFCeEI7Ozs7OztvQkFDRDtBQUFDLFNBdEJZLFlBQVk7QUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgcnV0SGVscGVycyBmcm9tICdydXQtaGVscGVycyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tmb3JtYXRSdXRdJyxcbiAgaG9zdDoge1xuICAgICcoYmx1ciknOiAnb25CbHVyKCRldmVudCknLFxuICAgICcoZm9jdXMpJzogJ29uRm9jdXMoJGV2ZW50KScsXG4gICAgJyhpbnB1dCknOiAnb25DaGFuZ2UoJGV2ZW50KScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIFJ1dERpcmVjdGl2ZSB7XG4gIEBPdXRwdXQoKSBwdWJsaWMgcnV0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJ1dENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkZvY3VzKGV2OiBFdmVudCkge1xuICAgIGxldCBodG1sSW5wdXRFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+IGV2LnRhcmdldDtcbiAgICBodG1sSW5wdXRFbGVtZW50LnZhbHVlID0gcnV0SGVscGVycy5ydXRDbGVhbihodG1sSW5wdXRFbGVtZW50LnZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkJsdXIoZXY6IEV2ZW50KSB7XG4gICAgbGV0IGh0bWxJbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD4gZXYudGFyZ2V0O1xuICAgIGh0bWxJbnB1dEVsZW1lbnQudmFsdWUgPSBydXRIZWxwZXJzLnJ1dEZvcm1hdChodG1sSW5wdXRFbGVtZW50LnZhbHVlKSB8fCAnJztcbiAgfVxuXG4gIHB1YmxpYyBvbkNoYW5nZShldjogRXZlbnQpIHtcbiAgICBsZXQgaHRtbElucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PiBldi50YXJnZXQ7XG4gICAgdGhpcy5ydXRDaGFuZ2UuZW1pdChydXRIZWxwZXJzLnJ1dENsZWFuKGh0bWxJbnB1dEVsZW1lbnQudmFsdWUpKTtcbiAgfVxufVxuIl19