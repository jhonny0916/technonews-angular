# 📰 TecnoNews - Lee, Favorea y Gestiona Noticias

Una aplicación web moderna para leer noticias de tecnología, educación, turismo y comercio. Con funcionalidades de favoritos, panel de administración y gestión de contenido.

## 🎯 ¿Qué es TecnoNews?

**TecnoNews** es una plataforma de noticias interactiva que te permite:
- 📖 Leer artículos sobre tecnología, educación, turismo y comercio
- ❤️ Guardar tus noticias favoritas
- 🔍 Buscar y filtrar noticias por categoría
- 📝 Crear, editar y eliminar noticias (solo para administradores)
- 📱 Acceder desde cualquier dispositivo

## 🚀 Características Principales

### Para Lectores 👥
- **Página de Inicio**: Descubre las noticias más recientes y destacadas
- **Sección de Noticias**: Explora todas las noticias disponibles
- **Búsqueda y Filtrado**: Encuentra noticias por categoría o palabra clave
- **Favoritos**: Guarda tus noticias preferidas en una lista personal
- **Detalle de Noticia**: Lee artículos completos con imágenes y contenido enriquecido
- **Contacto**: Ponte en contacto con nuestro equipo
- **Diseño Responsivo**: Funciona perfectamente en móvil, tablet y desktop

### Para Administradores 🔑
- **Panel de Administración**: Gestiona todas las noticias
- **Crear Noticias**: Publica nuevos artículos
- **Editar Noticias**: Modifica noticias existentes
- **Eliminar Noticias**: Elimina artículos de la plataforma
- **Vista Previa**: Visualiza las imágenes antes de publicar

---

## 📍 Navegación de la Aplicación

### Barra de Navegación Principal

En la parte superior de la página encontrarás la barra de navegación con:

| Elemento | Descripción |
|----------|-------------|
| **🔵 Tecno News** | Logo - Haz clic para volver a la página de inicio |
| **Inicio** | Accede a la página principal |
| **Noticias** | Ver todas las noticias disponibles |
| **Favoritos** | Accede a tus noticias guardadas |
| **Contacto** | Formulario para contactarnos |
| **🔑 Login** | Inicia sesión como administrador (si no estás logueado) |
| **⚙ Admin** | Accede al panel de administración (solo visible si has iniciado sesión) |
| **🚪 Salir** | Cierra tu sesión (solo visible si has iniciado sesión) |

### En Dispositivos Móviles 📱

- Toca el botón **☰** (menú hamburguesa) en la parte superior derecha
- Se abrirá el menú lateral con todas las opciones de navegación
- Toca cualquier opción para navegar

---

## 🏠 Página de Inicio

### Secciones Principales

**1. Héroe (Banner principal)**
- Imagen destacada y título de bienvenida
- Botón "Explorar Noticias" para acceder a todas las noticias

**2. Noticias Destacadas**
- Muestra las noticias más recientes
- Cada noticia muestra:
  - Imagen principal
  - Título
  - Descripción breve
  - Categoría (con color distintivo)
  - Autor y fecha
  - Tiempo de lectura estimado

**3. Categorías**
- Acceso rápido a noticias por tema:
  - 💻 **Tecnología**
  - 📚 **Educación**
  - ✈️ **Turismo**
  - 🛒 **Comercio**

---

## 📰 Sección de Noticias

### ¿Cómo Acceder?

1. Haz clic en **"Noticias"** en la barra de navegación
2. O haz clic en el botón **"Explorar Noticias"** de la página de inicio

### Funcionalidades de la Página de Noticias

**Buscador 🔍**
- Campo en la parte superior
- Escribe una palabra clave para buscar noticias
- Los resultados se filtran en tiempo real

**Filtrar por Categoría 📂**
- Panel lateral izquierdo (en desktop)
- Haz clic en una categoría para ver solo noticias de ese tipo
- Muestra el número de artículos en cada categoría
- La categoría activa aparece resaltada en teal

**Ordenar Noticias 📊**
- Dropdown en la parte superior derecha
- Ordena por:
  - Más recientes
  - Más antiguos
  - Título (A-Z)
  - Título (Z-A)

**Lista de Noticias**
- Cada tarjeta muestra:
  - Imagen de la noticia
  - Título
  - Descripción breve
  - Categoría (con color específico)
  - Autor
  - Fecha de publicación
  - Tiempo de lectura

### Interacción con Noticias

- **Ver Detalle**: Haz clic en cualquier noticia para leer el artículo completo
- **Agregar a Favoritos**: Usa el botón ❤️ en la tarjeta o en la página de detalle

---

## ❤️ Cómo Agregar una Noticia a Favoritos

### Opción 1: Desde la Lista de Noticias

1. Ve a **Noticias** en la navegación
2. Busca la noticia que te interesa
3. Haz clic en el botón **❤️** (corazón) en la tarjeta
4. La noticia aparecerá en tu lista de favoritos

### Opción 2: Desde la Página de Detalle

1. Haz clic en una noticia para abrirla
2. En la parte superior verás el botón **❤️ Guardar en Favoritos**
3. Haz clic para guardar
4. El botón cambiará de color indicando que está guardado

### Opción 3: Desde Favoritos (para remover)

1. Ve a **Favoritos** en la navegación
2. Verás todas tus noticias guardadas
3. Cada noticia tiene un botón **🗑️ (papelera)** en la parte derecha
4. Haz clic para remover la noticia de favoritos

### 📌 Vista de Favoritos

- Accede a **Favoritos** en el menú principal
- Muestra un contador (**4** por ejemplo) de noticias guardadas
- Si no tienes favoritos, verás un mensaje "No hay noticias guardadas"
- Las noticias se guardan en tu navegador (localStorage)
- Puedes remover cualquier noticia con un solo clic

---

## 📖 Leer una Noticia Completa

### Página de Detalle

1. Haz clic en cualquier noticia desde:
   - La página de inicio
   - La sección de noticias
   - Tu lista de favoritos

2. Se abrirá la página completa con:
   - **Imagen principal** - Grande y destacada
   - **Título** - Del artículo
   - **Metadatos** - Categoría, autor, fecha, tiempo de lectura
   - **Contenido completo** - El artículo completo
   - **Puntos destacados** - Información clave en bullets
   - **Botón de favorito** - ❤️ para guardar
   - **Noticias relacionadas** - Otros artículos similar
   - **Información del autor** - Datos del periodista

### Volver Atrás

- Haz clic en **← Atrás** en la parte superior
- O usa el botón atrás de tu navegador
- O haz clic en cualquier categoría en el sidebar

---

## 🔑 Iniciar Sesión como Administrador

### ¿Quién puede ser Administrador?

En esta versión de demostración, todos pueden acceder al panel admin con las credenciales de prueba.

### Pasos para Iniciar Sesión

1. Haz clic en el botón **🔑 Login** en la barra de navegación (parte superior derecha)
2. Se abrirá la página de login
3. Ingresa las credenciales:
   - **Usuario**: `admin`
   - **Contraseña**: `admin`
4. Haz clic en el botón **"Acceder"**
5. Serás redirigido al panel de administración

### Cambios en la Interfaz Después de Login

- El botón **🔑 Login** desaparece
- Aparecen dos botones nuevos:
  - **⚙ Admin** - Acceso al panel de administración
  - **🚪 Salir** - Para cerrar sesión
- En la barra lateral del admin, "Cerrar sesión" se vuelve funcional

---

## 📝 Panel de Administración

### Acceso al Panel

1. Haz login con las credenciales de admin
2. Haz clic en el botón **⚙ Admin** en la navegación
3. Serás redirigido a `/admin`

### Interfaz del Panel

**Barra Lateral (Izquierda)**
- **📰 Noticias** - Ver todas las noticias
- **➕ Crear noticia** - Agregar nueva noticia
- **👥 Usuarios** - (Deshabilitado en esta versión)
- **🚪 Cerrar sesión** - Cerrar tu sesión

**Área Principal**
- Título "Noticias" y contador de artículos
- Botón **"+ Nueva noticia"** para crear
- Tabla con todas las noticias publicadas

### Vista de Noticias (Tabla)

La tabla muestra todas las noticias con:

| Columna | Contenido |
|---------|-----------|
| **Imagen + Título** | Miniatura y nombre del artículo |
| **Categoría** | Color y nombre (Tecnología, Educación, etc.) |
| **Autor** | Nombre del periodista |
| **Fecha** | Fecha de publicación |
| **Acciones** | Botones para editar (✏️) o eliminar (🗑️) |

---

## ✏️ Crear una Nueva Noticia

### Pasos

1. En el panel de administración, haz clic en **"➕ Crear noticia"** en la barra lateral
2. O haz clic en el botón **"+ Nueva noticia"** en la parte superior
3. Se abrirá un formulario para crear la noticia

### Formulario de Creación

**1. Título** `*`
   - Campo de texto
   - Ejemplo: "OpenAI lanza GPT-5: así es el nuevo modelo de IA"

**2. Categoría** `*`
   - Dropdown con opciones:
     - Tecnología
     - Educación
     - Turismo
     - Comercio
   - Selecciona una categoría

**3. Descripción breve** `*`
   - Área de texto para resumen
   - Máximo 2 líneas
   - Ejemplo: "OpenAI ha presentado oficialmente GPT-5, su modelo más avanzado..."

**4. Descripción completa** `*`
   - Área grande de texto
   - Contenido completo del artículo
   - Puedes usar múltiples párrafos
   - Incluye toda la información relevante

**5. Autor**
   - Nombre del periodista o escritor
   - Campo opcional
   - Ejemplo: "Ana Gómez"

**6. URL de imagen** `*`
   - Enlace directo a la imagen
   - Formato: `https://...`
   - Ejemplo: `https://images.unsplash.com/photo-xxxxx`
   - **Preview**: Se muestra una vista previa cuando escribes una URL válida

### Validaciones

- ✅ Campos obligatorios marcados con `*` (asterisco rojo)
- ✅ La URL de imagen debe ser válida
- ✅ Se muestra error si falta algún campo requerido

### Guardar la Noticia

1. Completa todos los campos requeridos
2. Haz clic en el botón **"💾 Guardar"**
3. Se guardará la noticia con:
   - Fecha actual de publicación
   - Tiempo de lectura calculado automáticamente
   - ID único

### Después de Guardar

- Verás un mensaje **"✓ Guardado"** en el botón
- Serás redirigido a la vista de noticias automáticamente
- Tu nueva noticia aparecerá en la tabla

---

## ✏️ Editar una Noticia Existente

### Pasos

1. Ve al panel de administración
2. Ve a **"📰 Noticias"**
3. Busca la noticia que deseas editar
4. Haz clic en el botón **✏️** (editar) en la columna de acciones
5. Se abrirá el mismo formulario de creación, pero con los datos precargados

### Modificaciones

- Puedes cambiar cualquier campo:
  - Título
  - Categoría
  - Descripción breve
  - Descripción completa
  - Autor
  - URL de imagen

### Guardar Cambios

1. Modifica los campos que necesites
2. Haz clic en **"💾 Guardar"**
3. La noticia se actualizará
4. Serás redirigido a la lista de noticias

---

## 🗑️ Eliminar una Noticia

### Pasos

1. Ve al panel de administración
2. Ve a **"📰 Noticias"**
3. Busca la noticia que deseas eliminar
4. Haz clic en el botón **🗑️** (papelera) en la columna de acciones

### Confirmación

- Se abrirá un modal de confirmación
- Pregunta: "¿Eliminar noticia?"
- Mensaje: "Esta acción no se puede deshacer"

### Opciones

- **Cancelar** - Regresa a la lista sin eliminar
- **Eliminar** - Elimina permanentemente la noticia

---

## 👤 Información de Contacto

### ¿Cómo Contactarnos?

1. Haz clic en **"Contacto"** en la navegación principal
2. Se abrirá un formulario de contacto con:
   - Nombre (requerido)
   - Email (requerido)
   - Teléfono
   - Asunto (requerido)
   - Mensaje (requerido)

3. Completa los campos
4. Haz clic en **"Enviar"**

### Información de Contacto Directa

En la página de contacto también encontrarás:

- 📍 **Ubicación** - Dirección de nuestra oficina
- 📞 **Teléfono** - Número de contacto
- 📧 **Email** - Correo electrónico
- 🕒 **Horarios** - Horarios de atención

---

## 📱 Uso en Dispositivos Móviles

### Menú Móvil

- Toca el botón **☰** en la esquina superior derecha
- Se abrirá un menú lateral con todas las opciones
- Toca cualquier opción para navegar

### Optimización Móvil

- ✅ Interfaz completamente responsiva
- ✅ Botones grandes y fáciles de tocar
- ✅ Texto legible en pantallas pequeñas
- ✅ Imágenes que se adaptan al tamaño
- ✅ Formularios móvil-friendly

### Consejos para Móviles

1. Usa modo vertical (portrait) para mejor experiencia
2. Toca dos veces para hacer zoom en imágenes
3. Desliza horizontalmente en la tabla del admin para ver todas las columnas

---

## 🎨 Diseño y Colores

### Paleta de Colores

| Color | Uso |
|-------|-----|
| **Teal (#00b8a2)** | Botones principales, enlaces activos |
| **Azul Oscuro (#0d1b2a)** | Encabezado y footer |
| **Blanco (#ffffff)** | Fondos de tarjetas y contenido |
| **Gris claro (#f0f4f8)** | Fondo general de página |
| **Texto oscuro (#1e293b)** | Texto principal |
| **Rojo (#ef4444)** | Alertas y errores |

### Categorías (Colores)

- 💻 **Tecnología** - Azul (#3b82f6)
- 📚 **Educación** - Púrpura (#8b5cf6)
- ✈️ **Turismo** - Naranja (#f59e0b)
- 🛒 **Comercio** - Verde (#10b981)

---

## 💾 Almacenamiento de Datos

### Noticias

- Se guardan en `/public/data/news.json`
- Cada noticia contiene:
  - ID único
  - Título, categoría, contenido
  - Autor, fecha, tiempo de lectura
  - URL de imagen
  - Puntos destacados

### Favoritos

- Se guardan en tu navegador (localStorage)
- No se pierden al cerrar la pestaña
- Se pueden limpiar desde los datos del navegador

### Credenciales Admin

- Se guardan en `/public/data/news.json`
- Usuario: `admin`
- Contraseña: `admin`

---

## ⚙️ Instalación y Uso Local

### Requisitos

- Node.js 18+ instalado
- npm o yarn como gestor de paquetes

### Pasos

```bash
# 1. Clonar el repositorio
git clone <url-del-repositorio>

# 2. Entrar al directorio
cd technonews

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm start

# 5. Abrir en el navegador
# http://localhost:4200
```

### Comandos Útiles

```bash
# Compilar para producción
npm run build

# Ejecutar linter
npm run lint

# Ver la versión de Angular CLI
ng version
```

---

## 🐛 Solución de Problemas

### Las noticias no aparecen

- ✅ Asegúrate de que `/public/data/news.json` existe
- ✅ Verifica que el formato JSON es correcto
- ✅ Abre la consola del navegador (F12) para ver errores

### No puedo hacer login

- ✅ Verifica las credenciales: `admin` / `admin`
- ✅ Limpia el cache del navegador
- ✅ Abre las herramientas de desarrollador (F12) para ver errores

### Las imágenes no cargan

- ✅ Verifica que la URL de la imagen es válida
- ✅ Comprueba que el servidor de imágenes está disponible
- ✅ Intenta con otra URL diferente

### Favoritos no se guardan

- ✅ Asegúrate de que localStorage está habilitado en tu navegador
- ✅ No uses modo incógnito (private browsing)
- ✅ Verifica en Configuración → Privacidad → Cookies

---

## 📚 Información Técnica

### Stack de Tecnología

- **Frontend Framework**: Angular 18+
- **Lenguaje**: TypeScript
- **Estilos**: CSS3 con variables CSS
- **Almacenamiento**: JSON + localStorage
- **Build**: Angular CLI

### Estructura del Proyecto

```
technonews/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/
│   │   │   └── ...
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   ├── news-list/
│   │   │   ├── detail/
│   │   │   ├── favorites/
│   │   │   ├── contact/
│   │   │   ├── admin/
│   │   │   └── login/
│   │   ├── services/
│   │   │   ├── news.service.ts
│   │   │   ├── favorites.service.ts
│   │   │   ├── auth.service.ts
│   │   │   └── auth.guard.ts
│   │   ├── models.ts
│   │   ├── app.routes.ts
│   │   └── app.config.ts
│   ├── styles.css
│   └── index.html
├── public/
│   └── data/
│       └── news.json
└── angular.json
```

---

## 📞 Soporte y Contacto

### ¿Necesitas ayuda?

Usa el formulario de **Contacto** en la aplicación para:
- Reportar errores
- Sugerir mejoras
- Hacer preguntas
- Solicitar nuevas características

### Información de Contacto

- **Email**: contacto@technonews.com
- **Teléfono**: +57 (1) 234-5678
- **Ubicación**: Bogotá, Colombia
- **Horarios**: Lunes a Viernes, 9:00 AM - 6:00 PM

---

## 📄 Licencia

TecnoNews © 2026. Todos los derechos reservados.

---

## ✨ Características Futuras

Planeamos agregar:

- 🔔 Sistema de notificaciones
- 👥 Perfiles de usuario personalizados
- 💬 Sistema de comentarios
- 📊 Análisis de lecturas
- 🌐 Soporte multiidioma
- 🔍 Búsqueda avanzada
- 📧 Newsletter semanal

---

## 🙏 Gracias por usar TecnoNews

¡Esperamos que disfrutes leyendo noticias en nuestra plataforma!

Para reportar problemas o sugerencias, no dudes en contactarnos.

**¡Feliz lectura! 📰**

---

*Última actualización: Octubre 2026*
