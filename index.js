const app = require('./app');
const config = require('./config');
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');

const PORT = process.env.PORT || config.port;

// Swagger
// const swaggerDoc = YAML.load('./doc/openapi.yaml');
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
