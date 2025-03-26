<p align="center"><a href="https://reactjs.org" target="_blank"><img src="https://camo.githubusercontent.com/118beaba8872ecd1cc0fa048abc853d8a1717a549bd2627eade643e4a5fd66d3/68747470733a2f2f766974656a732e6465762f6c6f676f2e737667" width="200" alt="React Logo"></a></p>

# Evakia Inmobiliaria - Proyecto React + Vite

Este proyecto es una aplicación web desarrollada con React y Vite para la empresa **Evakia Inmobiliaria**. La aplicación ofrece información sobre los servicios de la empresa, como lotización, venta de lotes de terceros, construcción de viviendas, y más. Además, incluye funcionalidades como una galería de imágenes, testimonios de clientes, un mapa interactivo, y un formulario de contacto.

## Características principales

- **React + Vite**: Configuración optimizada para un desarrollo rápido y eficiente.
- **Tailwind CSS**: Estilización moderna y responsiva.
- **Framer Motion**: Animaciones fluidas y atractivas.
- **Leaflet**: Mapa interactivo para mostrar la ubicación de la empresa.
- **EmailJS**: Envío de correos electrónicos desde el formulario de contacto.
- **Rutas dinámicas**: Navegación entre páginas utilizando React Router.

## Estructura del proyecto

public/

- Archivos estáticos (imágenes, videos, etc.)

src/

- ui/
    - components/: Componentes reutilizables (Galería, Footer, etc.)
    - pages/: Páginas principales (Inicio, Conócenos, Servicios, Contactanos)
    - routes/: Definición de rutas
    - styles/: Estilos globales con Tailwind CSS

- main.jsx: Punto de entrada principal

Configuración y otros archivos importantes:

- .eslintrc.cjs: Configuración de ESLint
- tailwind.config.js: Configuración de Tailwind CSS
- vite.config.js: Configuración de Vite
- package.json: Dependencias y scripts del proyecto
- README.md: Documentación del proyecto

## Instalación y configuración

1. Clona este repositorio:
   ```bash
   git clone https://github.com/S1lenceY/evakia-proyecto.git
   cd evakia-proyecto

2. Instala las dependencias:
   ```bash
   npm install

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev

4. Abre la aplicación en tu navegador en: `http://localhost:8000`.

## Tecnologías utilizadas

- React: Biblioteca para construir interfaces de usuario.
- Vite: Herramienta de construcción rápida para proyectos web.
- Tailwind CSS: Framework de CSS para diseño responsivo.
- Framer Motion: Biblioteca para animaciones.
- Leaflet: Biblioteca para mapas interactivos.
- EmailJS: Servicio para enviar correos electrónicos desde el frontend.

## Funcionalidades destacadas

1. Galería de imágenes

La página de inicio incluye una galería interactiva que muestra imágenes de proyectos destacados.

2. Testimonios

Sección con testimonios de clientes satisfechos, animados con Framer Motion.

3. Mapa interactivo

Un mapa integrado con Leaflet muestra la ubicación de la empresa y permite a los usuarios obtener direcciones.

4. Formulario de contacto

Formulario funcional que utiliza EmailJS para enviar correos electrónicos directamente desde la aplicación.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

Haz un fork del repositorio.

Crea una rama para tu funcionalidad (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y haz commit (git commit -m 'Añadir nueva funcionalidad').
Envía tus cambios a tu repositorio (git push origin feature/nueva-funcionalidad).
Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT.

## Autor

Desarrollado por S1lenceY.