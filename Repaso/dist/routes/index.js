"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_controllers_1 = __importDefault(require("../controllers/todos.controllers"));
//const router = express.Router();
const router = (0, express_1.Router)();
router.get('', (req, res) => {
    res.send('api works');
});
router.get('/todos', todos_controllers_1.default.getAll);
exports.default = router; // Exportamos el router para poder usarlo en otros archivos
