import { component$ } from "@builder.io/qwik";

interface Props {
  color?: string;
  size?: string | number;
}
export const ComponentsIcon = component$<Props>(({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-components"
      width={size || "44"}
      height={size || "44"}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke={color || "#2c3e50"}
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 12l3 3l3 -3l-3 -3z" />
      <path d="M15 12l3 3l3 -3l-3 -3z" />
      <path d="M9 6l3 3l3 -3l-3 -3z" />
      <path d="M9 18l3 3l3 -3l-3 -3z" />
    </svg>
  );
});
