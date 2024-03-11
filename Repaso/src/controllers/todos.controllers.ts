import { Request, Response } from 'express';

class TodosControllers {
    getAll(req: Request, res: Response) {
        res.send('Todos works');
    }
}

const todosControllers = new TodosControllers();

export default todosControllers; // Exportamos el router para poder usarlo en otros archivos