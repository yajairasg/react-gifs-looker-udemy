# Buscador de gifs con React

## Descripción del proyecto

Se desarrolló un buscador de gifs. Cuando el usuario escribe la palabra y da enter, el sistema realiza un consumo al api que retorna 10 gifs (imágenes). La pantalla va listando las palabras buscadas con sus respectivos gifs. Si se recarga la pantalla se borra el historial y solo renderiza los gifs de las palabras claves por defecto (en este caso mario bros).

## Despliegue localmente

* Se requiere tener un usuario en https://developers.giphy.com/, seguidamente crear una App para tener la API Key y poder consumir el servicio que obtiene los gifs.
* En la línea 3 del archivo getGifs.js sustituir APIkey por la generada en giphy.
const url = `https://api.giphy.com/v1/gifs/search?api_key=APIKey&q=${ category }&limit=10`;
* Ejecutar el comando yarn install en la consola.
* Ejecutar el comando yarn dev en la consola para arrancar el proyecto.
* Abrir en un navegador la app con la url http://localhost:3000/ 

## Despliegue de la App a producción

Se realizó el despliegue de la app en producción app.netlify.com, para esto se requirió:
* Ejecutar el comando yarn build en la consola, esto genera una carpeta /dist en el proyecto que contiene los archivos para hacer el paso a producción.
* Creación de una cuenta en app.netlify.com y dar nombre al team, en mi caso es: Maya.
* Ir al menú deploys y cargar la carpeta /dist, esperar que finalice el despliegue.
* Una vez se despliega, en pantalla se evidencia la url, en mi caso generó: https://gifappudemy.netlify.app/ (se puede cambiar el dominio).


## Construido con

* [Vite](https://es.vitejs.dev/guide/) - Generación del proyecto base
* [JavaScript](https://developer.mozilla.org/es/) - Documentación JavaScript
* [React](https://es.reactjs.org/) - Biblioteca JavaScript


## Autor

* **Maria Yajaira Sanabria Guerrero** - *Desarrollo* - [yajairasg](https://github.com/yajairasg)

## Agradecimientos

* Gracias a Fernando Herrera y UDEMY por brindar cursos de alta calidad.
