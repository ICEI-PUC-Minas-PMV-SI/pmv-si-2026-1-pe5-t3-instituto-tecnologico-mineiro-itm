require('dotenv').config();
const app = require('./app');
const db  = require('./config/database');

const PORT = process.env.PORT || 3000;

const start = async () => {
  await db.query('SELECT 1');
  console.log('Conexão com MySQL estabelecida.');

  app.listen(PORT, () => {
    console.log(`ITM API rodando em http://localhost:${PORT}`);
  });
};

start().catch(err => {
  console.error('Falha ao conectar no banco:', err.message);
  process.exit(1);
});