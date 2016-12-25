"use strict";
var core_1 = require("@angular/core");
var nativescript_angular_1 = require('nativescript-angular');
var courses_list_1 = require('./courses-list');
var font_icon_1 = require('../core/font-icon');
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_angular_1.NativeScriptModule,
                nativescript_angular_1.NativeScriptFormsModule,
                nativescript_angular_1.NativeScriptRouterModule,
            ],
            declarations: [
                courses_list_1.CoursesListComponent,
                font_icon_1.FontIconPipe
            ],
            exports: [
                nativescript_angular_1.NativeScriptModule,
                nativescript_angular_1.NativeScriptRouterModule,
                nativescript_angular_1.NativeScriptFormsModule,
                courses_list_1.CoursesListComponent,
                font_icon_1.FontIconPipe
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map