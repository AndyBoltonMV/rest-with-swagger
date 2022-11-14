const app = require("./src/server"),
  swaggerJsdoc = require("swagger-jsdoc"),
  swaggerUi = require("swagger-ui-express"),
  port = require("./config").port;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Rest API with Swagger Docs",
      version: "0.1.0",
      description: "A demonstration of Swagger documentation",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Andy B",
        url: "https://github.com/AndyBoltonMV",
        email: "andyb@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:5001/user",
      },
      {
        url: "http://localhost:5001/content",
      },
    ],
  },
  apis: ["./src/User/routes.js", "./src/Content/routes.js"],
};

const specs = swaggerJsdoc(options);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

app.listen(port);
