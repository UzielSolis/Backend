import { User } from './types';
import UserRole from './types/user-role';

//const arreglo: Array<number | string> = [1, 2, 3, 4, 'Francisco'];
const yo: User = {
    name: 'Francisco',
    lastname: 'Gonzalez',
    age: 25
};

yo.email = 'francisco@email.mx';
yo.role = UserRole.CLIENT;

console.log(yo.role);