const express = require('express');
const path = require('path');

const noticias = require('./data/noticias');

const app = express();

const PORT = process.env.PORT || 3000;

const INSTANCE_NAME = process.env.INSTANCE_NAME || 'LOCAL';


// =====================================================
// CONFIGURACION DE EJS
// =====================================================

app.set('view engine', 'ejs');

app.set(
  'views',
  path.join(__dirname, 'views')
);


// =====================================================
// IDENTIFICADOR DE INSTANCIA
// =====================================================

app.use((req, res, next) => {

  res.setHeader(
    'X-App-Instance',
    INSTANCE_NAME
  );

  next();

});


// =====================================================
// ARCHIVOS ESTATICOS
// =====================================================

app.use(
  express.static(
    path.join(__dirname, 'public')
  )
);


// =====================================================
// PAGINA PRINCIPAL
// =====================================================

app.get('/', (req, res) => {

  res.render('index', {

    noticias: noticias,

    instanceName: INSTANCE_NAME

  });

});


// =====================================================
// HEALTH CHECK
// =====================================================

app.get('/health', (req, res) => {

  res.status(200).json({

    status: 'ok',

    instance: INSTANCE_NAME

  });

});


// =====================================================
// NOTICIA INDIVIDUAL
// =====================================================

app.get('/noticias/:id', (req, res) => {

  const id = parseInt(
    req.params.id,
    10
  );

  const noticia = noticias.find(
    (noticia) => noticia.id === id
  );


  if (!noticia) {

    return res
      .status(404)
      .render('404', {

        instanceName: INSTANCE_NAME

      });

  }


  res.render('noticia', {

    noticia: noticia,

    instanceName: INSTANCE_NAME

  });

});


// =====================================================
// RUTA 404 GENERAL
// =====================================================

app.use((req, res) => {

  res
    .status(404)
    .render('404', {

      instanceName: INSTANCE_NAME

    });

});


// =====================================================
// INICIAR SERVIDOR
// =====================================================

app.listen(
  PORT,
  '0.0.0.0',
  () => {

    console.log(
      `Servidor ejecutándose en http://localhost:${PORT}`
    );

    console.log(
      `Instancia activa: ${INSTANCE_NAME}`
    );

  }
);