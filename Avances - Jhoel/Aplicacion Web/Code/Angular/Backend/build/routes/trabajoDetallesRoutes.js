"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const trabajoDetallesController_1 = __importDefault(require("../controllers/trabajoDetallesController"));
class TrabajoDetallesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:idTrabajo', trabajoDetallesController_1.default.getOne);
    }
}
const trabajoDetallesRoutes = new TrabajoDetallesRoutes();
exports.default = trabajoDetallesRoutes.router;
