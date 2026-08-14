# Guía de Assets - DevSolutionsHN

Este documento especifica **qué archivos descargar/crear**, **nombres exactos**, **rutas**, **formatos** y **dimensiones** para todos los iconos, imágenes y elementos de diseño del proyecto.

---

## 📁 Estructura de carpetas `public/`

```
public/
├── favicon.svg              # Favicon principal (SVG)
├── apple-touch-icon.png     # Icono iOS (180x180 PNG)
├── og-image.svg             # Open Graph imagen general (1200x630)
├── icons.svg                # Sprite de iconos personalizados (opcional)
├── site.webmanifest         # PWA Manifest
├── robots.txt               # SEO robots
├── sitemap.xml              # SEO sitemap
└── projects/                # Imágenes de proyectos (OG cards)
    ├── conocesanluis-og.jpg
    ├── barberia-og.jpg
    ├── demo3-og.jpg         # Cuando agregues demo 3
    └── proyecto1-og.jpg     # Cuando agregues proyecto real 1
```

---

## 🎯 Iconos del sistema (Lucide React)

**No requieren descarga** - se usan desde `lucide-react` (ya instalado).

Iconos utilizados en `src/components/ui/Icon.tsx`:
| Nombre | Componente Lucide | Usos principales |
|--------|-------------------|------------------|
| `Globe` | `Globe` | Páginas web, Hero, Servicios |
| `ShoppingBag` | `ShoppingBag` | Tiendas online |
| `Settings` | `Settings` | Sistemas personalizados |
| `MessageSquare` | `MessageSquare` | WhatsApp, contacto |
| `Search` | `Search` | Búsqueda (futuro) |
| `FileText` | `FileText` | Documentos, FAQ |
| `Code` | `Code` | Desarrollo, proyectos en dev |
| `CheckCircle` | `CheckCircle` | Beneficios, confirmaciones |
| `Rocket` | `Rocket` | Lanzamiento, CTA |
| `Puzzle` | `Puzzle` | Soluciones personalizadas |
| `Palette` | `Palette` | Diseño |
| `Zap` | `Zap` | Velocidad, performance |
| `Tag` | `Tag` | Precios, paquetes |
| `MinusCircle` | `MinusCircle` | "No incluye" en paquetes |

**Para agregar más iconos:** edita `src/components/ui/Icon.tsx` → importa de `lucide-react` y añade al `iconMap`.

---

## 🖼️ Imágenes requeridas (Pendientes de crear/descargar)

### 1. **Favicon principal** → `public/favicon.svg`
| Propiedad | Valor |
|-----------|-------|
| **Formato** | SVG (vectorial, escala perfecta) |
| **Tamaño** | 32x32 viewBox (se escala automáticamente) |
| **Contenido** | Logo DevSolutionsHN (rectángulo redondeado + 3 líneas) |
| **Colores** | Fondo `#0f172a` (ink-900), líneas blancas |

> **Referencia actual:** El logo inline en `Header.tsx` y `Footer.tsx` usa este mismo SVG. Copia ese código a `public/favicon.svg`.

---

### 2. **Apple Touch Icon** → `public/apple-touch-icon.png`
| Propiedad | Valor |
|-----------|-------|
| **Formato** | PNG (requerido por iOS) |
| **Tamaño** | **180×180 px** (píxeles exactos) |
| **Fondo** | Sólido `#0f172a` (ink-900) |
| **Contenido** | Logo centrado (mismo diseño favicon) |
| **Padding** | ~20px alrededor del logo |

> **Generar:** Exporta el SVG del favicon a 180×180 PNG con fondo ink-900.

---

### 3. **Open Graph General** → `public/og-image.svg`
| Propiedad | Valor |
|-----------|-------|
| **Formato** | SVG (preferido) o PNG 1200×630 |
| **Tamaño** | **1200×630 px** (ratio 1.91:1 estándar FB/Twitter/LinkedIn) |
| **Uso** | `siteConfig.ogImage` → meta `og:image` y `twitter:image` |
| **Contenido sugerido** | |
| | - Fondo: degradado ink-900 → brand-600 |
| | - Logo DevSolutionsHN (centro, grande) |
| | - Tagline: "Creamos sitios web y soluciones digitales..." |
| | - Badge: "Desarrollo web en Honduras" |
| | - WhatsApp: "+504 8945-4813" |
| | - Espacio seguro: mantener contenido clave dentro de 1080×567 (centro) |

> **Nota:** Si usas SVG, funciona en todas las redes. Para PNG: exporta a 1200×630 exactos.

---

### 4. **Imágenes de Proyectos (OG Cards)** → `public/projects/*.jpg`

Cada proyecto en `src/data/projects.ts` necesita su imagen OG.

| Archivo | Proyecto | Dimensiones | Formato | Notas |
|---------|----------|-------------|---------|-------|
| `conocesanluis-og.jpg` | Conoce San Luis | **1200×630** | JPG (85% calidad) | Screenshot real del sitio |
| `barberia-og.jpg` | Sistema barbería | **1200×630** | JPG | Mockup o preview del sistema |
| `demo3-og.jpg` | Demo 3 (futuro) | **1200×630** | JPG | Cuando agregues |
| `proyecto1-og.jpg` | Proyecto real 1 (futuro) | **1200×630** | JPG | Screenshot producción |

> **En `projects.ts`:** la propiedad `image` usa ruta `/projects/nombre-archivo.jpg`
> **Optimización:** Comprime con TinyPNG / ImageOptim / `sharp` antes de subir.

---

### 5. **PWA Manifest** → `public/site.webmanifest`
```json
{
  "name": "DevSolutionsHN",
  "short_name": "DevSolutionsHN",
  "description": "Desarrollo web profesional para negocios en Honduras. Páginas web, tiendas online y sistemas personalizados.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0f172a",
  "theme_color": "#0ea5e9",
  "icons": [
    {
      "src": "/favicon.svg",
      "sizes": "any",
      "type": "image/svg+xml",
      "purpose": "any maskable"
    },
    {
      "src": "/apple-touch-icon.png",
      "sizes": "180x180",
      "type": "image/png",
      "purpose": "any"
    }
  ]
}
```

---

### 6. **SEO Files** → `public/robots.txt` y `public/sitemap.xml`
Se generan en build (configurar en `vite.config.ts` con `vite-plugin-sitemap`) o crear manualmente.

---

## 📋 Checklist de entrega (para diseñador/equipo)

| ✅ | Asset | Archivo | Estado |
|----|-------|---------|--------|
| ☐ | Favicon SVG | `public/favicon.svg` | **Crear** (copiar de Header.tsx) |
| ☐ | Apple Touch Icon | `public/apple-touch-icon.png` | **Exportar 180×180 PNG** |
| ☐ | OG Image General | `public/og-image.svg` | **Diseñar 1200×630** |
| ☐ | Proyecto: Conoce San Luis | `public/projects/conocesanluis-og.jpg` | **Screenshot 1200×630** |
| ☐ | Proyecto: Barbería | `public/projects/barberia-og.jpg` | **Mockup 1200×630** |
| ☐ | PWA Manifest | `public/site.webmanifest` | **Verificar/crear** |
| ☐ | robots.txt | `public/robots.txt` | **Crear** |
| ☐ | sitemap.xml | `public/sitemap.xml` | **Generar en build** |

---

## 🔧 Cómo probar localmente

```bash
# 1. Colocar todos los archivos en public/
# 2. Build de producción
npm run build

# 3. Preview local
npm run preview
# Abre http://localhost:4173

# 4. Verificar:
# - Favicon en pestaña del navegador
# - Meta og:image en DevTools → Elements → <meta property="og:image">
# - Twitter Card Validator: https://cards-dev.twitter.com/validator
# - Facebook Debugger: https://developers.facebook.com/tools/debug/
# - Lighthouse PWA audit
```

---

## 📝 Notas para futuros cambios

### Agregar nuevo proyecto
1. Edita `src/data/projects.ts` → agrega objeto al array
2. Crea imagen OG: `public/projects/nuevo-proyecto-og.jpg` (1200×630 JPG)
3. En el objeto: `image: '/projects/nuevo-proyecto-og.jpg'`

### Cambiar logo/branding
1. Actualiza SVG en: `Header.tsx`, `Footer.tsx`, `public/favicon.svg`
2. Re-exporta `apple-touch-icon.png` (180×180)
3. Actualiza `og-image.svg` con nuevo logo
4. Colors: `tailwind.config.js` → `theme.extend.colors` (brand, ink)

### Iconos adicionales
```tsx
// src/components/ui/Icon.tsx
import { NewIcon } from 'lucide-react';
// ...
const iconMap = {
  // ...
  NewIcon,  // agregar aquí
};
// Uso: <Icon name="NewIcon" size={24} />
```

---

## 📱 Responsive del botón WhatsApp flotante

El botón está en `Header.tsx` con clases:
```tsx
className="fixed bottom-6 right-6 z-[100] ... lg:bottom-8 lg:right-8"
```
- **Móvil:** 24px del borde (bottom-6 = 1.5rem)
- **Desktop:** 32px del borde (lg:bottom-8 = 2rem)
- **z-index:** 100 (encima de header z-50 y modales)

---

## 📞 Datos de contacto actuales (siteConfig.ts)

```typescript
whatsappNumber: '50489454813',  // Formato: 504 + 8 dígitos
email: 'devsolutionshn@gmail.com',
```
Se formatean automáticamente:
- WhatsApp link: `https://wa.me/50489454813?text=...`
- Display: `+504 8945-4813` (en Contacto.tsx línea 333)

---

**Última actualización:** 2026-08-14  
**Versión:** 1.0