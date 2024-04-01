import express from 'express';
import swaggerConfig from './../swagger.config.json';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const port = process.env.PORT || 3000;

const app = express();

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
const swaggerDocs = swaggerJsDoc(swaggerConfig);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () => {
    console.log(`api is running on port ${port}`);
});