import { component$ } from "@builder.io/qwik";

interface Props {
  color?: string;
  size?: string | number;
}
export const ActivityIcon = component$<Props>(({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-activity"
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
      <path d="M3 12h4l3 8l4 -16l3 8h4" />
    </svg>
  );
});
