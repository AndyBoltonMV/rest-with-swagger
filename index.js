const app = require("./src/server"),
  swaggerJsdoc = require("swagger-jsdoc"),
  swaggerUi = require("swagger-ui-express"),
  port = require("./config").port;

//description of API documentation
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
    //main endpoint locations in API
    servers: [
      {
        url: "http://localhost:5001/user",
      },
      {
        url: "http://localhost:5001/content",
      },
    ],
  },
  //location of yaml information for endpoints
  apis: ["./src/User/routes.js", "./src/Content/routes.js"],
};

//adding the options to the JSDoc set up
const specs = swaggerJsdoc(options);

//creating an endpoint that serves the documentation
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

app.listen(port);
