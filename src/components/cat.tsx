import { component$ } from "@builder.io/qwik";

interface Props {
  color?: string;
  size?: string | number;
}
export const CatIcon = component$<Props>(({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-cat"
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
      <path d="M20 3v10a8 8 0 1 1 -16 0v-10l3.432 3.432a7.963 7.963 0 0 1 4.568 -1.432c1.769 0 3.403 .574 4.728 1.546l3.272 -3.546z" />
      <path d="M2 16h5l-4 4" />
      <path d="M22 16h-5l4 4" />
      <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M9 11v.01" />
      <path d="M15 11v.01" />
    </svg>
  );
});
