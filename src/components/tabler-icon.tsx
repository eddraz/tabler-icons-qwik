import { Icons } from ".";

import { component$ } from "@builder.io/qwik";
import { IconI } from "../interfaces/icon.interface";

export const TablerIcon = component$<IconI>(
  ({ name, size = 44, stroke = 1.5, color = "#2c3e50" }) => {
    const Component = Icons[name];

    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class={["icon", "icon-tabler", `icon-tabler-${name}`]}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          stroke-width={stroke}
          stroke={color}
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <Component color={color} />
        </svg>
      </>
    );
  }
);
