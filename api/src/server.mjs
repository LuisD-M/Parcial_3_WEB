import { app } from './app.js';
import { DB_HOST, DB_PORT } from './src/config.mjs';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://${DB_HOST}:${PORT}`);
});