(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('lib', ['exports', '@angular/core'], factory) :
    (factory((global.lib = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LibService = (function () {
        function LibService() {
        }
        LibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        LibService.ctorParameters = function () { return []; };
        /** @nocollapse */ LibService.ngInjectableDef = i0.defineInjectable({ factory: function LibService_Factory() { return new LibService(); }, token: LibService, providedIn: "root" });
        return LibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LibComponent = (function () {
        function LibComponent() {
        }
        /**
         * @return {?}
         */
        LibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        LibComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-lib',
                        template: "\n    <p>\n      libasdasdasd works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        LibComponent.ctorParameters = function () { return []; };
        return LibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LibModule = (function () {
        function LibModule() {
        }
        LibModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [LibComponent],
                        exports: [LibComponent]
                    },] },
        ];
        return LibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.LibService = LibService;
    exports.LibComponent = LibComponent;
    exports.LibModule = LibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbGliL2xpYi9saWIuc2VydmljZS50cyIsIm5nOi8vbGliL2xpYi9saWIuY29tcG9uZW50LnRzIiwibmc6Ly9saWIvbGliL2xpYi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMaWJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWxpYicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBsaWJhc2Rhc2Rhc2Qgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIExpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGliQ29tcG9uZW50IH0gZnJvbSAnLi9saWIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtMaWJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTGliQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBMaWJNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7O3lCQUpEO0tBUUM7Ozs7OztBQ1JEO1FBYUU7U0FBaUI7Ozs7UUFFakIsK0JBQVE7OztZQUFSO2FBQ0M7O29CQWRGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLFFBQVEsRUFBRSxvREFJVDt3QkFDRCxNQUFNLEVBQUUsRUFBRTtxQkFDWDs7O1FBUUQsbUJBQUM7S0FBQTs7Ozs7O0FDbEJEO1FBR0E7U0FNMEI7O29CQU56QkMsV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxFQUNSO3dCQUNELFlBQVksRUFBRSxDQUFDLFlBQVksQ0FBQzt3QkFDNUIsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO3FCQUN4Qjs7UUFDd0IsZ0JBQUM7S0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9