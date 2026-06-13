const express = require('express');
const cors    = require('cors');
const helmet  = require('helmet');
const equipamentosRoutes = require('./routes/equipamentosRoute');
const enderecosIpRoutes  = require('./routes/enderecosIpRoute');
const linksRoutes = require('./routes/linksRoute');
const swaggerUi = require('swagger-ui-express');
const YAML      = require('yamljs');

const app = express();
const swaggerDoc = YAML.load('./swagger.yaml');

app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors());
app.use(express.json());
app.use('/api/equipamentos', equipamentosRoutes);
app.use('/api/enderecos-ip', enderecosIpRoutes);
app.use('/api/links', linksRoutes);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.get('/api', (req, res) => {
  res.json({
    name: 'ITM API',
    version: '1.0.0',
    description: 'API REST do Instituto Tecnológico Mineiro',
  });
});

app.use((req, res) => {
  res.status(404).json({ erro: 'Rota não encontrada.' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ erro: 'Erro interno do servidor.' });
});

module.exports = app;