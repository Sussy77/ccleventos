const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./models').sequelize;

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Importar rutas
const eventoRoutes = require('./routes/eventos');
const authRoutes = require('./routes/auth');

// Usar rutas
app.use('/api/eventos', eventoRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
        await sequelize.sync(); // Sincroniza los modelos con la base de datos
        console.log('All models were synchronized successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});
