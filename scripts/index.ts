import { ICONS } from "./icons";

function convertToCamelCase(word) {
  // Dividir la palabra en partes separadas por "-"
  const parts = word.split("-");

  // Convertir cada parte a minúsculas excepto la primera
  const camelCaseWord = parts
    .map((part, index) => {
      if (index === 0) {
        return part.charAt(0).toUpperCase() + part.slice(1);
      } else {
        return part.charAt(0).toUpperCase() + part.slice(1);
      }
    })
    .join("");

  return camelCaseWord;
}

ICONS.forEach((name) => {
  console.log(name, convertToCamelCase(name));
});
