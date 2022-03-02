const app = require('./app');
require('dotenv').config();
const { connectToDB } = require('./db');

const PORT = process.env.PORT ?? 5001;

function connectServer() {
  app.listen(PORT, () => console.log(`Соединение с сервером на порту ${PORT}`));
}

connectToDB()
  .then(connectServer)
  .catch(process.exit);
