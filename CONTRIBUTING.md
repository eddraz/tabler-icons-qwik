# Contributing to Tabler Icons for Qwik

## Sending a Pull Request

Before submitting a pull request, consider the following guidelines:

- Fork the repository into your own account.
- In your forked repository, create a new branch: `git checkout -b my-branch main`
- Make your changes/fixes.
- Run `bun fmt` to lint the code.
- Push your branch to GitHub: `git push origin my-branch`
- In GitHub, send a pull request to **tabler-icons-qwik:main**.

## Code Editing

You should go to Tabler Icons, then select the icon you want to add, for example:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pizza">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 21.5c-3.04 0 -5.952 -.714 -8.5 -1.983l8.5 -16.517l8.5 16.517a19.09 19.09 0 0 1 -8.5 1.983z" /><path d="M5.38 15.866a14.94 14.94 0 0 0 6.815 1.634a14.944 14.944 0 0 0 6.502 -1.479" />
  <path d="M13 11.01v-.01" /><path d="M11 14v-.01" />
</svg>
```

For the previous pizza icon 🍕 example, you should copy only the path elements from the SVG and edit the pizza component located in `src/components/icons/pizza.tsx`, then run the `bun dev` command.

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

Finally, test it with the component located in `src/root.tsx` by editing the name from "components" to "pizza".
