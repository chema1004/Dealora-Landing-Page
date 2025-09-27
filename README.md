# 📋 README.md - Landing Page Dealora

```markdown
# 🎯 Dealora - Landing Page

![Dealora Landing](https://img.shields.io/badge/Dealora-Landing%20Page-purple?style=for-the-badge&logo=react)
![Version](https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

Landing page profesional y responsive para **Dealora**, la aplicación de cupones y descuentos que conecta usuarios con establecimientos locales. Diseño moderno, minimalista y optimizado para conversiones.

## 🚀 Demo

**URL del sitio vivo:** [https://dealora-landing.netlify.app](https://dealora-landing.netlify.app)  
**Repositorio GitHub:** [https://github.com/tuusuario/dealora-landing](https://github.com/tuusuario/dealora-landing)

![Dealora Preview](images/preview.png)

## ✨ Características

### 🎨 Diseño
- **Diseño responsive** - Perfecto en desktop, tablet y móvil
- **Paleta de colores moderna** - Gradientes purple-pink (#8B5CF6 a #EC4899)
- **Tipografía elegante** - Inter + Playfair Display
- **Animaciones suaves** - Efectos hover y transiciones CSS
- **Modo claro** - Diseño minimalista y profesional

### ⚡ Funcionalidades
- **Formulario de lista de espera** funcional con validación
- **Menú móvil** responsive con animación
- **Acordeón FAQ** interactivo
- **Contadores animados** para estadísticas
- **Scroll suave** entre secciones
- **Botón "Volver arriba"** flotante
- **Optimización SEO** completa

### 📱 Secciones Incluidas
- ✅ **Hero Section** - Presentación impactante con call-to-action
- ✅ **Beneficios** - Ventajas para usuarios y establecimientos  
- ✅ **Cómo funciona** - Proceso en 3 pasos simples
- ✅ **Categorías** - Restaurantes, belleza, fitness, entretenimiento
- ✅ **Para empresas** - Sección específica para establecimientos
- ✅ **Lista de espera** - Formulario de captación de leads
- ✅ **FAQ** - Preguntas frecuentes interactivas
- ✅ **Footer** - Enlaces y información de contacto

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5** - Estructura semántica
- **CSS3** - Tailwind CSS + Custom styles
- **JavaScript** - Vanilla ES6+
- **Tailwind CSS** - Framework CSS utility-first

### Herramientas
- **Google Fonts** - Inter & Playfair Display
- **Font Awesome** - Iconos (CDN)
- **Netlify** - Deployment y hosting
- **Favicon.io** - Generador de favicons

### Performance
- **Score Lighthouse:** 95+ 
- **Tiempo de carga:** <2s
- **Tamaño total:** ~200KB

## 📁 Estructura del Proyecto

```
dealora-landing/
├── index.html                 # Página principal
├── css/
│   └── style.css             # Estilos personalizados
├── js/
│   └── script.js             # JavaScript functionality
├── images/                   # Assets multimedia
│   ├── favicon.ico          # Favicon principal
│   ├── logo.svg             # Logo de la marca
│   ├── hero-app-mockup.png  # Mockup de la app
│   └── apple-touch-icon.png # Icono para iOS
├── .gitignore               # Archivos ignorados por Git
└── README.md               # Este archivo
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Navegador web moderno
- Editor de código (VS Code recomendado)
- Git (opcional)

### Instalación Local

1. **Clonar el repositorio**
```bash
git clone https://github.com/tuusuario/dealora-landing.git
cd dealora-landing
```

2. **Abrir en editor**
```bash
code .  # Si usas VS Code
```

3. **Ejecutar localmente**
- Opción 1: Abrir `index.html` directamente en el navegador
- Opción 2: Usar Live Server en VS Code
- Opción 3: Servidor local simple:
```bash
python -m http.server 8000
```

### Personalización

1. **Modificar contenido**
   - Editar `index.html` para cambiar textos
   - Actualizar colores en clases Tailwind
   - Modificar estilos en `css/style.css`

2. **Cambiar colores (Tailwind)**
```html
<!-- Gradiente principal -->
class="bg-gradient-to-r from-purple-500 to-pink-500"

<!-- Colores secundarios -->
class="bg-purple-100 text-purple-600"
```

3. **Actualizar información de contacto**
```html
<!-- En el footer -->
<li>hola@dealora.com</li>
<li>+34 123 456 789</li>
```

## 🌐 Deployment

### Opción 1: Netlify (Recomendado)
1. Conectar repositorio GitHub a Netlify
2. Configurar build settings:
   - Build command: (vacío)
   - Publish directory: ./
3. Deploy automático con cada push

### Opción 2: Vercel
```bash
npm i -g vercel
vercel --prod
```

### Opción 3: GitHub Pages
1. Ir a Settings → Pages
2. Source: GitHub Actions
3. Configurar workflow manualmente

### Opción 4: Hosting Tradicional
- Subir archivos vía FTP a cualquier hosting
- Asegurar que `index.html` esté en raíz

## 🎨 Personalización Avanzada

### Modificar la Paleta de Colores
En `css/style.css` añadir:
```css
:root {
  --dealora-purple: #8B5CF6;
  --dealora-pink: #EC4899;
  --dealora-gradient: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%);
}
```

### Añadir Nuevas Secciones
1. Crear nueva sección en `index.html`
2. Añadir estilos en `css/style.css`
3. Actualizar navegación en header

### Integrar con Backend
Para conectar el formulario:
```javascript
// En js/script.js
const API_URL = 'https://tu-backend.com/api/waitlist';

fetch(API_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
```

## 📊 Métricas y Analytics

### Google Analytics
Añadir en `<head>`:
```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Métricas a Seguir
- **Tasa de conversión** del formulario
- **Tiempo en página** promedio
- **Porcentaje de rebote**
- **Dispositivos más usados**

## 🐛 Solución de Problemas

### Problemas Comunes

1. **Favicon no aparece**
   - Verificar que `favicon.ico` esté en `/images`
   - Chequear la ruta en el `<head>`

2. **Formulario no envía**
   - Revisar la consola del navegador
   - Verificar que `script.js` esté cargado

3. **Diseño no responsive**
   - Verificar meta viewport en `<head>`
   - Chequear clases Tailwind responsive

4. **Imágenes no cargan**
   - Verificar rutas y nombres de archivos
   - Chequear mayúsculas/minúsculas

### Debugging
```javascript
// En js/script.js
console.log('Dealora cargado correctamente');
// Verificar que el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM completamente cargado');
});
```

## 🤝 Contribución

### Reportar Issues
1. Ir a [Issues](https://github.com/tuusuario/dealora-landing/issues)
2. Usar template correspondiente
3. Incluir screenshots si es necesario

### Sugerir Mejoras
1. Fork del proyecto
2. Crear rama feature: `git checkout -b feature/AmazingFeature`
3. Commit changes: `git commit -m 'Add AmazingFeature'`
4. Push: `git push origin feature/AmazingFeature`
5. Abrir Pull Request

### Guía de Estilos
- **HTML:** Indentación 2 espacios
- **CSS:** Orden alfabético propiedades
- **JS:** ES6+, funciones arrow, template literals
- **Commits:** Conventional commits

## 📈 Roadmap

### Versión 1.1.0 (Próxima)
- [ ] Integración con API real
- [ ] Modo oscuro
- [ ] Multidioma (ES/EN)
- [ ] Blog integrado

### Versión 1.2.0
- [ ] PWA functionality
- [ ] Testimonios reales
- [ ] Video demostrativo
- [ ] Chatbot integrado

### Versión 2.0.0
- [ ] Panel admin para contenido
- [ ] CMS headless integration
- [ ] A/B testing
- [ ] Analytics avanzado

## 👥 Equipo

**Desarrollador Principal**  
- Nombre: [Tu Nombre]
- Email: tu.email@dealora.com
- GitHub: [@tuusuario](https://github.com/tuusuario)

**Diseñador UX/UI**  
- Nombre: [Nombre Diseñador]
- Portfolio: [link]

## 🏆 Reconocimientos

- **Tailwind CSS** - Por el excelente framework de utilidades
- **Google Fonts** - Por las tipografías de calidad
- **Netlify** - Por el hosting y deployment simplificado
- **Favicon.io** - Por el generador de favicons

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para detalles.

## 🌟 Support

Si te gusta este proyecto, por favor dale una ⭐ en GitHub!

---

**Dealora** - *Tus cupones favoritos en un solo lugar* 🎯

---

<div align="center">

### ¿Te gustó este proyecto?

[⭐ Dale una estrella en GitHub](https://github.com/tuusuario/dealora-landing) | 
[🐛 Reportar un issue](https://github.com/tuusuario/dealora-landing/issues) |
[💡 Sugerir mejora](https://github.com/tuusuario/dealora-landing/pulls)

*Hecho con ❤️ para la comunidad de developers*

</div>
```

