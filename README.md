# Automax - Proyecto de Renta de Autos

Proyecto del tercer parcial

## Getting Started

El objetivo de este proyecto es desarrollar un servidor web en Node.js que aloje una página para la renta de automóviles, utilizando Docker para facilitar su despliegue.

---

### Prerequisitos

* Tener Docker instalado en tu sistema.

### Instalación

1. Descarga la imagen desde Docker Hub:
   ```sh
   docker pull 7lucas24/automax
   ```
2. Ejecuta el contenedor:
   ```sh
   docker run -it -p 8888:8888 7lucas24/automax
   ```
3. Abre tu navegador y visita [http://localhost:8888](http://localhost:8888) para ver la página.

---

## Pruebas

Actualmente, las pruebas del proyecto se basan en la ejecución y verificación manual de las rutas y opciones de la página web.

### Pruebas end-to-end

* Navega por las diferentes secciones (Home, Contacto, Acerca de, Galería de autos).
* Verifica que los enlaces funcionen correctamente y que las imágenes y estilos se carguen bien.

---

## Despliegue

Para desplegar este proyecto en un entorno real, se recomienda contar con Docker instalado en el servidor objetivo y ejecutar el contenedor directamente desde Docker Hub.

---

## Construido con

* **Node.js** - Servidor web
* **HTML/CSS** - Frontend de la página
* **Docker** - Contenedor para distribuir la aplicación

---

## Autores

* Luis Arturo Hernández Castillo 
* Eduardo Tristan Chavez 
* Idaly Guadalupe Morales Robredo
* Adrian Caleb Jaramillo Flores 

---

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

---

## Agradecimientos

* A los profesores de la UACH por guiar el aprendizaje del desarrollo de software.
* A Docker por permitir empaquetar fácilmente la aplicación.
* A quienes contribuyeron con documentación y ejemplos de metodologías.
