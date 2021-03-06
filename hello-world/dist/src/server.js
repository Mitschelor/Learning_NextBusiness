"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var server = app_1.default.listen(app_1.default.get("port"), function () {
    console.log("App is running at http://localhost:%d", app_1.default.get("port"));
    console.log("  Press CTRL-C to stop\n");
});
exports.default = server;
