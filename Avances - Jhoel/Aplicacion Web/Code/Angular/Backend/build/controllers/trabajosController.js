"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class TrabajosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const trabajos = yield database_1.default.query('SELECT * FROM trabajos');
            res.json(trabajos);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idTrabajo } = req.params;
            const trabajo = yield database_1.default.query('SELECT * FROM trabajos WHERE idTrabajo = ?', [idTrabajo]);
            console.log(trabajo.length);
            if (trabajo.length > 0) {
                return res.json(trabajo[0]);
            }
            res.status(404).json({ text: "El Trabajo no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO trabajos set ?', [req.body]);
            res.json({ message: 'Guardar Trabajo' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idTrabajo } = req.params;
            const oldTrabajos = req.body;
            yield database_1.default.query('UPDATE trabajos set ? WHERE idTrabajo = ?', [req.body, idTrabajo]);
            res.json({ message: "El Trabajo a sido actualizado" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idTrabajo } = req.params;
            yield database_1.default.query('DELETE FROM trabajos WHERE idTrabajo = ?', [idTrabajo]);
            res.json({ message: "El Trabajo ha sido eliminado" });
        });
    }
}
const trabajosController = new TrabajosController;
exports.default = trabajosController;
