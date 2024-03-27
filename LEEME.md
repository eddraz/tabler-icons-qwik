# Biblioteca Qwik ⚡️

- [Qwik Docs](https://qwik.builder.io/)
- [Discord](https://qwik.builder.io/chat)
- [Qwik on GitHub](https://github.com/BuilderIO/qwik)
- [@QwikDev](https://twitter.com/QwikDev)
- [Vite](https://vitejs.dev/)
- [Partytown](https://partytown.builder.io/)
- [Mitosis](https://github.com/BuilderIO/mitosis)
- [Builder.io](https://www.builder.io/)

---

## Estructura del Proyecto

Dentro de tu proyecto, verás los siguientes directorios y archivos:

```
├── public/
│   └── ...
└── src/
    ├── components/
    │   └── ...
    └── index.ts
```

- `src/components`: Directorio recomendado para componentes.
- `index.ts`: El punto de entrada de tu biblioteca de componentes, asegúrate de exportar todos los componentes públicos desde este archivo.

## Desarrollo

El modo de desarrollo utiliza el servidor de desarrollo de [Vite's development server](https://vitejs.dev/). Para Qwik durante el desarrollo, el comando `dev` también renderizará del lado del servidor (SSR) la salida. Los módulos de desarrollo del lado del cliente se cargan por el navegador.

```bash
bun dev
```

> Nota: durante el modo de desarrollo, Vite solicitará muchos archivos JS, lo cual no representa una compilación de producción de Qwik.

## Producción

La compilación de producción debería generar la compilación de producción de tu biblioteca de componentes en (./lib) y las definiciones de tipos de TypeScript en (./lib-types).

```bash
bun build
```

# Tabler Icons para Qwik

Una colección de 5219 iconos SVG gratuitos y de alta calidad con licencia MIT para usar en tus proyectos web. Cada icono está diseñado en una cuadrícula de 24x24 con un trazo de 2px de Tabler Icons (https://tablericons.com/), construido bajo el framework Qwik.

## Instalación

```bash
    bun add qwik-lib-tabler-icons
```

## Uso

```typescript
import { TablerIcon } from "qwik-lib-tabler-icons";

export const App = () => {
  return (
    <TablerIcon name="components" size="24" color="red" stroke="3" />
  );
}
```

### Propiedades

- **Name:** Define el nombre del icono.
- **Size:** Define el tamaño del icono.
- **Color:** Define el color del icono.
- **Stroke:** Define el ancho del trazo del icono.
