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
class TrabajoDetallesController {
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idTrabajo } = req.params;
            const trabajo = yield database_1.default.query('SELECT t.nombreTrabajo, t.descTrabajo, t.pagoTrabajo, t.estado, t.fechaInicio, t.fechaFinal, t.plazoPostulacion, t.distrito, t.direccion, e.nombre, e.apellido, e.numTelefono, e.correo FROM trabajos t INNER JOIN empleadores e ON t.dniEmpleador = e.dniEmpleador WHERE t.idTrabajo=?', [idTrabajo]);
            console.log(trabajo.length);
            if (trabajo.length > 0) {
                return res.json(trabajo[0]);
            }
            res.status(404).json({ text: "El Trabajo no existe" });
        });
    }
}
const trabajoDetallesController = new TrabajoDetallesController;
exports.default = trabajoDetallesController;
