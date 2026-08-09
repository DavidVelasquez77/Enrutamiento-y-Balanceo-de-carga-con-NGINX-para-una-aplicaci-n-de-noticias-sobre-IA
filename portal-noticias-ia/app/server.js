const express = require('express');
const path = require('path');

const noticias = require('./data/noticias');

const app = express();

const PORT = process.env.PORT || 3000;

// Identificador de la instancia.
// Más adelante Docker asignará APP-1 y APP-2.
const INSTANCE_NAME = process.env.INSTANCE_NAME || 'LOCAL';

// Configurar EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Agregar identificador de instancia a todas las respuestas HTTP
app.use((req, res, next) => {
  res.setHeader('X-App-Instance', INSTANCE_NAME);
  next();
});

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Página principal
app.get('/', (req, res) => {
  res.render('index', {
    noticias: noticias,
    instanceName: INSTANCE_NAME
  });
});

// Endpoint para comprobar el estado de la instancia
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    instance: INSTANCE_NAME
  });
});

// Página individual de noticia
app.get('/noticias/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  const noticia = noticias.find((noticia) => noticia.id === id);

  if (!noticia) {
    return res.status(404).send(`
      <h1>404 - Noticia no encontrada</h1>
      <p>La noticia solicitada no existe.</p>
      <p>Instancia: ${INSTANCE_NAME}</p>
      <a href="/">Volver al portal</a>
    `);
  }

  res.render('noticia', {
    noticia: noticia,
    instanceName: INSTANCE_NAME
  });
});

// Iniciar servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
  console.log(`Instancia activa: ${INSTANCE_NAME}`);
});