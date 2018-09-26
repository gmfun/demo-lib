import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LibService = /** @class */ (function () {
    function LibService() {
    }
    LibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    LibService.ctorParameters = function () { return []; };
    /** @nocollapse */ LibService.ngInjectableDef = defineInjectable({ factory: function LibService_Factory() { return new LibService(); }, token: LibService, providedIn: "root" });
    return LibService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LibComponent = /** @class */ (function () {
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
        { type: Component, args: [{
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
var LibModule = /** @class */ (function () {
    function LibModule() {
    }
    LibModule.decorators = [
        { type: NgModule, args: [{
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

export { LibService, LibComponent, LibModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9saWIvbGliL2xpYi5zZXJ2aWNlLnRzIiwibmc6Ly9saWIvbGliL2xpYi5jb21wb25lbnQudHMiLCJuZzovL2xpYi9saWIvbGliLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExpYlNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbGliJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIGxpYmFzZGFzZGFzZCB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMaWJDb21wb25lbnQgfSBmcm9tICcuL2xpYi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0xpYkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtMaWJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIExpYk1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtJQU9FO0tBQWlCOztnQkFMbEIsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztxQkFKRDtDQVFDOzs7Ozs7QUNSRDtJQWFFO0tBQWlCOzs7O0lBRWpCLCtCQUFROzs7SUFBUjtLQUNDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSxvREFJVDtvQkFDRCxNQUFNLEVBQUUsRUFBRTtpQkFDWDs7O0lBUUQsbUJBQUM7Q0FBQTs7Ozs7O0FDbEJEO0lBR0E7S0FNMEI7O2dCQU56QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLEVBQ1I7b0JBQ0QsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUM1QixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCOztJQUN3QixnQkFBQztDQUFBOzs7Ozs7Ozs7Ozs7OzsifQ==