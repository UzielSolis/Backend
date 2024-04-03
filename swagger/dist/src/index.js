"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_config_json_1 = __importDefault(require("./../swagger.config.json"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const port = process.env.PORT || 3000;
const app = (0, express_1.default)();
/**
 * @swagger
 * /:
 *  get:
 *   summary: api home
 *   tags: [Home]
 *   description: api home endpoint
 */
app.get('', (req, res) => {
    res.send('api works');
});
/**
 * @swagger
 * /users:
 *  get:
 *   tags: [Users]
 *   description: get list of users
 *   responses:
 *    200:
 *     description: success
 *    400:
 *     description: bad request
 */
app.get('/users', (req, res) => {
    res.send([]);
});
/**
 * @swagger
 * /users/{id}:
 *  get:
 *   description: get one user
 *   tags: [Users]
 *   parameters:
 *    - in: path
 *      name: id
 *   responses:
 *    200:
 *     description: success
 *    400:
 *     description: bad request
 */
app.get('/users/:id', (req, res) => {
    res.send({});
});
// Swagger
const swaggerDocs = (0, swagger_jsdoc_1.default)(swagger_config_json_1.default);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
app.listen(port, () => {
    console.log(`api is running on port ${port}`);
});
