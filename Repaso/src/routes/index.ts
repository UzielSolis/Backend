import express, {Router, Request, Response} from 'express';
import todosControllers from '../controllers/todos.controllers';
//const router = express.Router();
const router = Router();

router.get('', (req: Request, res: Response) => {
    res.send('api works');
});

router.get('/todos', todosControllers.getAll);

export default router; // Exportamos el router para poder usarlo en otros archivos