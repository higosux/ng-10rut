(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),exports, require('@angular/core'), require('rut-helpers'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('ng9-rut', ['@angular/core','exports', '@angular/core', 'rut-helpers', '@angular/forms'], factory) :
    (global = global || self, factory(global.ng.core,global['ng9-rut'] = {}, global.ng.core, global.rutHelpers, global.ng.forms));
}(this, (function (ɵngcc0,exports, core, rutHelpers, forms) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var Ng9RutService = /** @class */ (function () {
        function Ng9RutService() {
        }
        Ng9RutService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function Ng9RutService_Factory() { return new Ng9RutService(); }, token: Ng9RutService, providedIn: "root" });
Ng9RutService.ɵfac = function Ng9RutService_Factory(t) { return new (t || Ng9RutService)(); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Ng9RutService, [{
        type: core.Injectable,
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
            return rutHelpers.rutFormat(value);
        };
RutPipe.ɵfac = function RutPipe_Factory(t) { return new (t || RutPipe)(); };
RutPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "rut", type: RutPipe, pure: true });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RutPipe, [{
        type: core.Pipe,
        args: [{
                name: 'rut'
            }]
    }], function () { return []; }, null); })();
        return RutPipe;
    }());

    var RutDirective = /** @class */ (function () {
        function RutDirective() {
            this.rutChange = new core.EventEmitter();
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
            core.Output()
        ], RutDirective.prototype, "rutChange", void 0);
RutDirective.ɵfac = function RutDirective_Factory(t) { return new (t || RutDirective)(); };
RutDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: RutDirective, selectors: [["", "formatRut", ""]], hostBindings: function RutDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("blur", function RutDirective_blur_HostBindingHandler($event) { return ctx.onBlur($event); })("focus", function RutDirective_focus_HostBindingHandler($event) { return ctx.onFocus($event); })("input", function RutDirective_input_HostBindingHandler($event) { return ctx.onChange($event); });
    } }, outputs: { rutChange: "rutChange" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RutDirective, [{
        type: core.Directive,
        args: [{
                selector: '[formatRut]',
                host: {
                    '(blur)': 'onBlur($event)',
                    '(focus)': 'onFocus($event)',
                    '(input)': 'onChange($event)'
                }
            }]
    }], function () { return []; }, { rutChange: [{
            type: core.Output
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
            this.validator = validateRutFactory(rutHelpers.rutValidate);
        }
        RutValidator_1 = RutValidator;
        RutValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        var RutValidator_1;
RutValidator.ɵfac = function RutValidator_Factory(t) { return new (t || RutValidator)(); };
RutValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: RutValidator, selectors: [["", "validateRut", "", "ngModel", ""], ["", "validateRut", "", "formControl", ""]], features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: forms.NG_VALIDATORS, useExisting: core.forwardRef(function () { return RutValidator_1; }), multi: true },
        ])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RutValidator, [{
        type: core.Directive,
        args: [{
                selector: '[validateRut][ngModel],[validateRut][formControl]',
                providers: [
                    { provide: forms.NG_VALIDATORS, useExisting: core.forwardRef(function () { return RutValidator_1; }), multi: true },
                ]
            }]
    }], function () { return []; }, null); })();
        return RutValidator;
    }());

    var RUT_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return RutValueAccessor; }),
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
            var normalizedValue = rutHelpers.rutFormat(value) || '';
            this.renderer.setProperty(this.elementRef.nativeElement, 'value', normalizedValue);
        };
        RutValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
        RutValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        RutValueAccessor.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
RutValueAccessor.ɵfac = function RutValueAccessor_Factory(t) { return new (t || RutValueAccessor)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
RutValueAccessor.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: RutValueAccessor, selectors: [["input", "formatRut", ""]], hostBindings: function RutValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("rutChange", function RutValueAccessor_rutChange_HostBindingHandler($event) { return ctx.onChange($event); })("blur", function RutValueAccessor_blur_HostBindingHandler($event) { return ctx.onTouched($event); });
    } }, features: [ɵngcc0.ɵɵProvidersFeature([RUT_VALUE_ACCESSOR])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RutValueAccessor, [{
        type: core.Directive,
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
        type: core.NgModule,
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

    Object.keys(rutHelpers).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return rutHelpers[k];
            }
        });
    });
    exports.Ng9RutModule = Ng9RutModule;
    exports.Ng9RutService = Ng9RutService;
    exports.RutDirective = RutDirective;
    exports.RutPipe = RutPipe;
    exports.RutValidator = RutValidator;
    exports.RutValueAccessor = RutValueAccessor;
    exports.validateRutFactory = validateRutFactory;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng9-rut.umd.js.map