"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_role_1 = __importDefault(require("./types/user-role"));
//const arreglo: Array<number | string> = [1, 2, 3, 4, 'Francisco'];
const yo = {
    name: 'Francisco',
    lastname: 'Gonzalez',
    age: 25
};
yo.email = 'francisco@email.mx';
yo.role = user_role_1.default.CLIENT;
console.log(yo.role);
