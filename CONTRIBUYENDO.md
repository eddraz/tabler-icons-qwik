# Contribuyendo a Tabler Icons para Qwik

## Enviando un Pull Request

Antes de enviar una solicitud de extracción (pull request), considere las siguientes pautas:

- Realice un fork del repositorio a su propia cuenta.
- En su repositorio bifurcado, cree una nueva rama: `git checkout -b mi-rama main`
- Realice sus cambios/correcciones.
- Ejecute `bun fmt` para revisar el código.
- Envíe su rama a GitHub: `git push origin mi-rama`
- En GitHub, envíe una solicitud de extracción a **tabler-icons-qwik:main**.

## Edición de Código

Debes ir a Tabler Icons, luego seleccionar el icono que deseas agregar, por ejemplo:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pizza">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 21.5c-3.04 0 -5.952 -.714 -8.5 -1.983l8.5 -16.517l8.5 16.517a19.09 19.09 0 0 1 -8.5 1.983z" /><path d="M5.38 15.866a14.94 14.94 0 0 0 6.815 1.634a14.944 14.944 0 0 0 6.502 -1.479" />
  <path d="M13 11.01v-.01" /><path d="M11 14v-.01" />
</svg>
```

Para el ejemplo anterior del icono de pizza 🍕, debes copiar solo los elementos path del SVG y editar el componente pizza ubicado en `src/components/icons/pizza.tsx`, luego ejecutar el comando `bun dev`.

```typescript
export const IconPizza = () => {
  return (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 21.5c-3.04 0 -5.952 -.714 -8.5 -1.983l8.5 -16.517l8.5 16.517a19.09 19.09 0 0 1 -8.5 1.983z" /><path d="M5.38 15.866a14.94 14.94 0 0 0 6.815 1.634a14.944 14.944 0 0 0 6.502 -1.479" />
      <path d="M13 11.01v-.01" /><path d="M11 14v-.01" />
    </>
  );
};
```

Finalmente, pruébalo con el componente ubicado en `src/root.tsx` editando el nombre de "components" a "pizza".
