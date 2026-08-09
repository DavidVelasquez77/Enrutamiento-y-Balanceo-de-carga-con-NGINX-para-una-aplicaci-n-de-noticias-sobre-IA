const express = require('express');
const path = require('path');

const noticias = require('./data/noticias');

const app = express();

const PORT = process.env.PORT || 3000;

// Configurar EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Página principal
app.get('/', (req, res) => {
  res.render('index', {
    noticias: noticias
  });
});

// Página individual
app.get('/noticias/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  const noticia = noticias.find((noticia) => noticia.id === id);

  if (!noticia) {
    return res.status(404).send(`
      <h1>404 - Noticia no encontrada</h1>
      <p>La noticia solicitada no existe.</p>
      <a href="/">Volver al portal</a>
    `);
  }

  res.render('noticia', {
    noticia: noticia
  });
});

// Iniciar servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});