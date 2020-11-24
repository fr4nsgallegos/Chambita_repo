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
class TrabajadoresController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield database_1.default.query('SELECT * FROM usuario');
            res.json(usuario);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM usuario WHERE id = ?', [id]);
            console.log(usuario.length);
            if (usuario.length > 0) {
                return res.json(usuario[0]);
            }
            res.status(404).json({ text: "El Usuario no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO usuario set ?', [req.body]);
            res.json({ message: 'Guardar Usuario' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldUsuario = req.body;
            yield database_1.default.query('UPDATE usuario set ? WHERE id = ?', [req.body, id]);
            res.json({ message: "El Usuario a sido actualizado" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM usuario WHERE id = ?', [id]);
            res.json({ message: "El usuario ha sido eliminado" });
        });
    }
}
const trabajadoresController = new TrabajadoresController;
exports.default = trabajadoresController;
