"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class TrabajadoresRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Trabajadores'));
    }
}
const trabajadoresRoutes = new TrabajadoresRoutes();
exports.default = trabajadoresRoutes.router;
