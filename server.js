const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); 

// NUESTRA RUTA SECRETA
app.post('/api/contacto', (req, res) => {
    const datos = req.body;

    console.log('Nueva persona para contactar');
    console.log('Nombre:', datos.nombre);
    console.log('Email:', datos.email);
    console.log('Mensaje:', datos.mensaje);

    setTimeout(() => {
        res.status(200).json({ mensaje: 'Datos recibidos' });
    }, 1500);
});

// ENCENDER EL SERVIDOR
app.listen(PORT, () => {
    console.log(`Servidor backend en http://localhost:${PORT}`);
});