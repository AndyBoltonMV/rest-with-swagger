/**
 * @openapi
 * /:
 *  post:
 *      summary: Creates a new user.
 *      consumes:
 *       - application/json
 *      parameters:
 *       - in: body
 *         name: user
 *         description: The user to create.
 *         schema:
 *          type: object
 *          required:
 *              - username
 *          properties:
 *              username:
 *                  type: string
 *              email:
 *                  type: string
 *              password:
 *                  type: string
 *      responses:
 *       200:
 *         description: Returns the created user.
 *  get:
 *      summary: Gets all users.
 *      responses:
 *       200:
 *         description: Returns all users in array.
 *  put:
 *      summary: Updates a user.
 *      consumes:
 *       - application/json
 *      parameters:
 *       - in: body
 *         name: updateObj
 *         description: Key value pair to be updated.
 *         schema:
 *          type: object
 *          properties:
 *             email:
 *                 type: string
 *      response:
 *         200:
 *           description: Successfully updated
 */
const router = require("express").Router();
const { create, read, update, del } = require("./controllers");

router.post("/", create).get("/", read).put("/", update).delete("/", del);

module.exports = router;
