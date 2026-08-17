# Guía de Assets - DevSolutionsHN

> **Objetivo:** Lista exacta de archivos que debes crear/descargar, con nombres, rutas, formatos y dimensiones. Sin ambigüedad.

---

## 📋 Resumen rápido: Qué archivos faltan

| Archivo | Ruta | Formato | Tamaño | Estado |
|---------|------|---------|--------|--------|
| Favicon principal | `public/favicon.svg` | SVG | 32×32 viewBox | ❌ Crear |
| Apple Touch Icon | `public/apple-touch-icon.png` | PNG | 180×180 px | ❌ Crear |
| OG Image general | `public/og-image.svg` | SVG/PNG | 1200×630 px | ❌ Crear |
| Proyecto Conoce San Luis | `public/projects/conocesanluis-og.jpg` | JPG | 1200×630 px | ❌ Screenshot |
| Proyecto Barbería | `public/projects/barberia-og.jpg` | JPG | 1200×630 px | ❌ Mockup |
| PWA Manifest | `public/site.webmanifest` | JSON | — | ❌ Verificar |
| robots.txt | `public/robots.txt` | TXT | — | ❌ Crear |
| sitemap.xml | `public/sitemap.xml` | XML | — | ❌ Generar en build |

---

## 🎯 Paso a paso: Cómo crear cada archivo

### 1. Favicon principal → `public/favicon.svg`

**Dónde está el código:** Abre `src/components/layout/Header.tsx` (líneas 51-64) o `src/components/layout/Footer.tsx`. Copia el SVG del logo.

**Contenido exacto que debe tener:**
```svg
<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="8" fill="#0f172a" />
  <path d="M8 12h16M8 16h12M8 20h8" stroke="white" stroke-width="2.5" stroke-linecap="round" />
</svg>
```

**Acción:** Crea archivo `public/favicon.svg` y pega ese código. Guárdalo.

---

### 2. Apple Touch Icon → `public/apple-touch-icon.png`

**Requisitos:**
- Formato: **PNG** (obligatorio para iOS)
- Tamaño: **180×180 píxeles exactos**
- Fondo: **#0f172a** (color ink-900, azul oscuro)
- Logo: Centrado, mismo diseño que favicon
- Padding: ~20px alrededor del logo

**Cómo generarlo:**
1. Abre el `favicon.svg` en Figma / Illustrator / Inkscape / Photopea (gratis online)
2. Exporta a **PNG 180×180** con fondo `#0f172a`
3. Guárdalo como `public/apple-touch-icon.png`

---

### 3. Open Graph Image general → `public/og-image.svg` (o PNG)

**Requisitos:**
- Formato: **SVG preferido** (funciona en todas las redes) o **PNG 1200×630**
- Tamaño: **1200×630 px** (ratio 1.91:1 estándar Facebook/Twitter/LinkedIn)
- Uso: Se referencia en `src/config/siteConfig.ts` línea 32: `ogImage: '/og-image.svg'`

**Contenido sugerido (diseño):**
- Fondo: Degradado `#0f172a` → `#0ea5e9` (ink-900 a brand-500)
- Logo DevSolutionsHN grande en el centro
- Texto: "Creamos sitios web y soluciones digitales adaptadas a lo que realmente necesita tu negocio."
- Badge: "Desarrollo web en Honduras"
- WhatsApp: "+504 8945-4813"
- **Zona segura:** Mantén todo lo importante dentro de 1080×567 centrado (algunas redes recortan bordes)

**Cómo crearlo:**
1. Diseña en Figma (1200×630)
2. Exporta como SVG (mejor) o PNG
3. Guárdalo como `public/og-image.svg`

---

### 4. Imágenes de proyectos → `public/projects/*.jpg`

**Cada proyecto en `src/data/projects.ts` necesita su imagen OG.**

| Archivo | Proyecto | Dimensiones | Formato | Qué poner |
|---------|----------|-------------|---------|-----------|
| `conocesanluis-og.jpg` | Conoce San Luis | 1200×630 | JPG 85% | **Screenshot real** del sitio en vivo |
| `barberia-og.jpg` | Sistema barbería | 1200×630 | JPG 85% | Mockup o preview del sistema |
| `demo3-og.jpg` | Demo 3 (futuro) | 1200×630 | JPG 85% | Cuando agregues |
| `proyecto1-og.jpg` | Proyecto real 1 | 1200×630 | JPG 85% | Screenshot producción |

**En `src/data/projects.ts`** la propiedad `image` usa: `'/projects/nombre-archivo.jpg'`

**Optimización:** Antes de subir, comprime con:
- [TinyPNG](https://tinypng.com/) (gratis, web)
- ImageOptim (Mac)
- `sharp` / `imagemin` (build)

---

### 5. PWA Manifest → `public/site.webmanifest`

**Verifica que exista y tenga esto:**
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

### 6. robots.txt → `public/robots.txt`

**Contenido mínimo:**
```
User-agent: *
Allow: /

Sitemap: https://devsolutionshn.hn/sitemap.xml
```

---

### 7. sitemap.xml → `public/sitemap.xml`

**Se genera automáticamente en build** si configuras `vite-plugin-sitemap` en `vite.config.ts`.

**O crear manualmente** (ejemplo):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://devsolutionshn.hn/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://devsolutionshn.hn/servicios</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://devsolutionshn.hn/precios</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://devsolutionshn.hn/proyectos</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://devsolutionshn.hn/proceso</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>
  <url><loc>https://devsolutionshn.hn/faq</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>
  <url><loc>https://devsolutionshn.hn/contacto</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
</urlset>
```

---

## ✅ Checklist visual (marca cuando termines)

- [ ] `public/favicon.svg` — SVG del logo (copia de Header.tsx)
- [ ] `public/apple-touch-icon.png` — PNG 180×180, fondo #0f172a
- [ ] `public/og-image.svg` — SVG/PNG 1200×630, diseño completo
- [ ] `public/projects/conocesanluis-og.jpg` — JPG 1200×630, screenshot real
- [ ] `public/projects/barberia-og.jpg` — JPG 1200×630, mockup
- [ ] `public/site.webmanifest` — JSON válido, rutas correctas
- [ ] `public/robots.txt` — Texto plano, permite todo, apunta a sitemap
- [ ] `public/sitemap.xml` — XML válido, todas las rutas

---

## 🔧 Cómo probar que todo funciona

```bash
# 1. Coloca TODOS los archivos en public/
# 2. Build de producción
npm run build

# 3. Preview local
npm run preview
# Abre http://localhost:4173

# 4. Verifica en el navegador:
#    - Favicon en la pestaña ✓
#    - Click derecho → Ver código fuente → busca <meta property="og:image">
#    - Twitter Card Validator: https://cards-dev.twitter.com/validator
#    - Facebook Debugger: https://developers.facebook.com/tools/debug/
#    - Lighthouse → PWA audit (instalable, icons)
```

---

## 📝 Datos de contacto actuales (ya en código)

```typescript
// src/config/siteConfig.ts
whatsappNumber: '50489454813',  // Formato: 504 + 8 dígitos
email: 'devsolutionshn@gmail.com',
```

Se usan automáticamente en:
- WhatsApp links: `https://wa.me/50489454813?text=...`
- Display: `+504 8945-4813` (en Contacto.tsx)

---

## 🎨 Iconos del sistema (NO requieren descarga)

Usan `lucide-react` (ya instalado). Están en `src/components/ui/Icon.tsx`:

| Nombre | Componente | Usos |
|--------|------------|------|
| `Globe` | Globe | Web, Hero, Servicios |
| `ShoppingBag` | ShoppingBag | Tiendas online |
| `Settings` | Settings | Sistemas personalizados |
| `MessageSquare` | MessageSquare | WhatsApp, contacto |
| `Tag` | Tag | Precios, paquetes |
| `CheckCircle` | CheckCircle | Beneficios |
| `Code` | Code | Desarrollo |
| `FileText` | FileText | FAQ, documentos |
| `Rocket` | Rocket | Lanzamiento, CTA |
| `Puzzle` | Puzzle | Soluciones personalizadas |
| `Palette` | Palette | Diseño |
| `Zap` | Zap | Velocidad |
| `MinusCircle` | MinusCircle | "No incluye" |

**Para agregar más:** Edita `src/components/ui/Icon.tsx` → importa de `lucide-react` y añade al `iconMap`.

---

## 📁 Estructura final esperada en `public/`

```
public/
├── favicon.svg                    ← CREAR (copia SVG de Header.tsx)
├── apple-touch-icon.png           ← CREAR (exportar 180×180 PNG)
├── og-image.svg                   ← CREAR (diseñar 1200×630)
├── site.webmanifest               ← VERIFICAR (JSON válido)
├── robots.txt                     ← CREAR (texto simple)
├── sitemap.xml                    ← GENERAR en build o crear manual
└── projects/
    ├── conocesanluis-og.jpg       ← SCREENSHOT real 1200×630
    ├── barberia-og.jpg            ← MOCKUP 1200×630
    ├── demo3-og.jpg               ← CUANDO AGREGUES
    └── proyecto1-og.jpg           ← CUANDO AGREGUES
```

---

**Última actualización:** 2026-08-17  
**Versión:** 2.0 — Más claro, paso a paso, sin ambigüedad