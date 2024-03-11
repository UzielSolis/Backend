"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TodosControllers {
    getAll(req, res) {
        res.send('Todos works');
    }
}
const todosControllers = new TodosControllers();
exports.default = todosControllers; // Exportamos el router para poder usarlo en otros archivos
