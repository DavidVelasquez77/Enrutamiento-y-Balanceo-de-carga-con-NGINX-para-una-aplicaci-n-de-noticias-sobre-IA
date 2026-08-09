const noticias = [
  {
    id: 1,
    titulo: 'La inteligencia artificial transforma la forma de aprender programación',
    fecha: '9 de agosto de 2026',
    categoria: 'Inteligencia Artificial',
    imagen: '/images/noticia-1.jpg',
    resumen:
      'Las herramientas basadas en inteligencia artificial se están convirtiendo en un recurso de apoyo para estudiantes que desean comprender conceptos de programación y resolver problemas de manera guiada.',
    contenido: `
      La inteligencia artificial se ha convertido en una herramienta de apoyo para el aprendizaje de programación. Mediante asistentes capaces de explicar código, proponer ejemplos y detectar errores, los estudiantes pueden recibir orientación mientras desarrollan sus propios proyectos.

      Una de las principales ventajas de estas herramientas es la posibilidad de solicitar explicaciones adaptadas al nivel de conocimiento del usuario. Un mismo concepto puede explicarse mediante ejemplos sencillos, diagramas, pseudocódigo o fragmentos de programas, facilitando la comprensión de temas que inicialmente pueden resultar complejos.

      Sin embargo, el uso responsable de inteligencia artificial requiere que los estudiantes comprendan el código generado y verifiquen sus resultados. La IA debe utilizarse como una herramienta de apoyo y no como un reemplazo del proceso de aprendizaje, análisis y razonamiento necesario para desarrollar software.
    `,
    ia: 'Contenido generado con ChatGPT y revisado para fines académicos.'
  },

  {
    id: 2,
    titulo: 'La ciberseguridad adquiere mayor importancia en los servicios digitales',
    fecha: '8 de agosto de 2026',
    categoria: 'Ciberseguridad',
    imagen: '/images/noticia-2.jpg',
    resumen:
      'La protección de cuentas, aplicaciones y datos continúa siendo un aspecto fundamental en el desarrollo y utilización de servicios digitales.',
    contenido: `
      La creciente utilización de aplicaciones y servicios digitales hace necesario incorporar medidas de seguridad desde las primeras etapas de desarrollo. La protección de credenciales, información personal y sistemas informáticos forma parte de las principales responsabilidades de organizaciones y desarrolladores.

      Entre las prácticas recomendadas se encuentran el uso de contraseñas seguras, autenticación adicional, actualización frecuente de sistemas y control adecuado de los permisos otorgados a los usuarios. Estas medidas permiten reducir diferentes riesgos asociados con accesos no autorizados y pérdida de información.

      La educación también constituye un elemento importante de la ciberseguridad. Reconocer mensajes sospechosos, enlaces fraudulentos y solicitudes inusuales puede ayudar a prevenir incidentes que no necesariamente dependen de vulnerabilidades técnicas, sino del comportamiento de los usuarios.
    `,
    ia: 'Contenido generado con ChatGPT y revisado para fines académicos.'
  },

  {
    id: 3,
    titulo: 'La computación en la nube facilita la creación de aplicaciones escalables',
    fecha: '7 de agosto de 2026',
    categoria: 'Computación en la nube',
    imagen: '/images/noticia-3.jpg',
    resumen:
      'Los servicios de computación en la nube permiten que aplicaciones y plataformas utilicen recursos tecnológicos de acuerdo con sus necesidades.',
    contenido: `
      La computación en la nube ofrece diferentes alternativas para ejecutar aplicaciones, almacenar información y proporcionar servicios mediante infraestructura disponible a través de Internet. Esto permite que los proyectos tecnológicos puedan utilizar recursos sin depender exclusivamente de servidores físicos propios.

      Una de sus características más importantes es la capacidad de adaptar los recursos disponibles según las necesidades de una aplicación. Si aumenta la cantidad de usuarios, una arquitectura correctamente diseñada puede incorporar recursos adicionales para mantener un funcionamiento adecuado.

      Para estudiantes de tecnología, comprender conceptos relacionados con servidores, redes, almacenamiento y despliegue en la nube representa una oportunidad para conocer arquitecturas utilizadas actualmente en diferentes tipos de sistemas informáticos.
    `,
    ia: 'Contenido generado con ChatGPT y revisado para fines académicos.'
  },

  {
    id: 4,
    titulo: 'La robótica educativa impulsa el aprendizaje práctico de tecnología',
    fecha: '6 de agosto de 2026',
    categoria: 'Robótica',
    imagen: '/images/noticia-4.jpg',
    resumen:
      'Los proyectos de robótica permiten integrar conocimientos de programación, electrónica y resolución de problemas mediante experiencias prácticas.',
    contenido: `
      La robótica educativa proporciona una forma práctica de aprender diferentes áreas relacionadas con la tecnología. La construcción de pequeños prototipos permite combinar componentes electrónicos, sensores, programación y mecanismos para resolver problemas específicos.

      Durante el desarrollo de un proyecto de robótica, los estudiantes deben analizar el comportamiento esperado del sistema, programar sus funciones y realizar diferentes pruebas. Este proceso favorece habilidades relacionadas con experimentación, trabajo en equipo y resolución de problemas.

      Además del conocimiento técnico, la robótica puede utilizarse para comprender cómo interactúan el software y los componentes físicos. Esta relación resulta especialmente útil para introducir conceptos asociados con automatización, Internet de las cosas y sistemas inteligentes.
    `,
    ia: 'Contenido generado con ChatGPT y revisado para fines académicos.'
  },

  {
    id: 5,
    titulo: 'Nuevas tecnologías amplían las posibilidades de los videojuegos',
    fecha: '5 de agosto de 2026',
    categoria: 'Videojuegos',
    imagen: '/images/noticia-5.jpg',
    resumen:
      'El desarrollo de videojuegos combina programación, diseño, inteligencia artificial y tecnologías gráficas para crear experiencias digitales cada vez más interactivas.',
    contenido: `
      La industria de los videojuegos constituye un ejemplo de integración entre diferentes áreas de la tecnología. Para desarrollar una experiencia interactiva se combinan programación, diseño gráfico, sonido, simulaciones físicas y diferentes técnicas de inteligencia artificial.

      Tecnologías como la realidad virtual y la realidad aumentada permiten explorar nuevas formas de interacción. Estas herramientas buscan incrementar la sensación de presencia del usuario y crear experiencias en las que los elementos digitales se relacionan de nuevas maneras con su entorno.

      El desarrollo de videojuegos también representa un campo de aprendizaje para estudiantes de informática. La creación de pequeños proyectos permite practicar estructuras de datos, programación orientada a objetos, interfaces, diseño de algoritmos y optimización de recursos.
    `,
    ia: 'Contenido generado con ChatGPT y revisado para fines académicos.'
  },

  {
    id: 6,
    titulo: 'El software de código abierto fortalece el aprendizaje universitario',
    fecha: '4 de agosto de 2026',
    categoria: 'Software',
    imagen: '/images/noticia-6.jpg',
    resumen:
      'Las herramientas de código abierto ofrecen a estudiantes la oportunidad de estudiar, modificar y experimentar con tecnologías utilizadas en proyectos reales.',
    contenido: `
      El software de código abierto permite acceder al código fuente de diferentes herramientas y plataformas, brindando una oportunidad de aprendizaje para estudiantes interesados en comprender cómo se construyen los sistemas informáticos.

      Tecnologías utilizadas en servidores, desarrollo web, bases de datos y automatización cuentan con proyectos de código abierto que pueden instalarse y estudiarse sin necesidad de desarrollar todas las herramientas desde cero. Esto facilita la creación de laboratorios y ambientes de práctica.

      Participar en proyectos abiertos también puede ayudar a fortalecer conocimientos relacionados con control de versiones, documentación, pruebas y colaboración entre desarrolladores. Estas habilidades son importantes tanto en entornos académicos como en proyectos profesionales.
    `,
    ia: 'Contenido generado con ChatGPT y revisado para fines académicos.'
  }
];

module.exports = noticias;