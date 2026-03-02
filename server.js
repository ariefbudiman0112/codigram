require('dotenv').config();
const app = require('./src/app');
const db = require('./src/models');

const port = process.env.PORT || 3000;

async function startServer() {
    try {
        await db.sequelize.authenticate();
        console.log('Database connection has been established successfully.');

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (err) {
        console.error('Error starting server:', err);
    }
  }
  startServer();    