import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
import { rutFormat } from 'rut-helpers';
import * as ɵngcc0 from '@angular/core';
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
export { RutPipe };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnV0LnBpcGUuanMiLCJzb3VyY2VzIjpbIm5nOS1ydXQvbGliL3J1dC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQUt4QztBQUEyQyxJQUEzQztBQUFxQixJQUlyQixDQUFDO0FBQ0QsSUFKUywyQkFBUyxHQUFoQixVQUFpQixLQUFhO0FBQUksUUFDaEMsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDNUIsSUFBRSxDQUFDO0lBSFUsT0FBTyx3QkFIbkIsSUFBSSxDQUFDLGNBQ0osSUFBSSxFQUFFLEtBQUssV0FDWjtBQUFDLFFBQ1csT0FBTyxDQUluQjs7Ozs7O2dEQUNEO0FBQUMsSUFERCxjQUFDO0FBQ0EsQ0FEQSxBQUpELElBSUM7QUFDRCxTQUxhLE9BQU87QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHJ1dEZvcm1hdCB9IGZyb20gJ3J1dC1oZWxwZXJzJztcblxuQFBpcGUoe1xuICBuYW1lOiAncnV0Jyxcbn0pXG5leHBvcnQgY2xhc3MgUnV0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBwdWJsaWMgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBydXRGb3JtYXQodmFsdWUpO1xuICB9XG59XG4iXX0=