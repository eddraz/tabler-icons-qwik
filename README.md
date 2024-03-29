# Qwik Library ⚡️

- [Qwik Docs](https://qwik.builder.io/)
- [Discord](https://qwik.builder.io/chat)
- [Qwik on GitHub](https://github.com/BuilderIO/qwik)
- [@QwikDev](https://twitter.com/QwikDev)
- [Vite](https://vitejs.dev/)
- [Partytown](https://partytown.builder.io/)
- [Mitosis](https://github.com/BuilderIO/mitosis)
- [Builder.io](https://www.builder.io/)

---

## Project Structure

Inside your project, you'll see the following directories and files:

```
├── public/
│   └── ...
└── src/
    ├── components/
    │   └── ...
    └── index.ts
```

- `src/components`: Recommended directory for components.
- `index.ts`: The entry point of your component library, make sure all the public components are exported from this file.

## Development

Development mode uses [Vite's development server](https://vitejs.dev/). For Qwik during development, the `dev` command will also server-side render (SSR) the output. The client-side development modules are loaded by the browser.

```bash
bun dev
```

> Note: during dev mode, Vite will request many JS files, which does not represent a Qwik production build.

## Production

The production build should generate the production build of your component library in (./lib) and the typescript type definitions in (./lib-types).

```bash
bun build
```

# Tabler Icons for Qwik

A collection of 5219 high-quality, free SVG icons licensed under MIT for use in your web projects. Each icon is designed on a 24x24 grid with a 2px stroke from [Tabler Icons](https://tablericons.com/), built under the Qwik framework.

## Installation

```bash
    bun add qwik-lib-tabler-icons
```

## Usage

```typescript
import { TablerIcon } from "qwik-lib-tabler-icons";

export const App = () => {
  return (
    <TablerIcon name="components" size="24" color="red" stroke="3" />
  );
}
```

### Properties

- **Name:** Defines the name of the icon.
- **Size:** Defines the size of the icon.
- **Color:** Defines the color of the icon.
- **Stroke:** Defines the stroke width of the icon.
