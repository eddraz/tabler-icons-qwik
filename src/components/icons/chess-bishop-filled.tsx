interface Props {
  color?: string;
}
export const IconChessBishopFilled = ({ color }: Props) => {
  return (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M12 2a2 2 0 0 1 1.386 3.442c.646 .28 1.226 .62 1.74 1.017l-3.833 3.834l-.083 .094a1 1 0 0 0 1.403 1.403l.094 -.083l3.814 -3.813c.977 1.35 1.479 3.07 1.479 5.106c0 1.913 -1.178 3.722 -3.089 3.973l-.2 .02l-.211 .007h-5c-2.126 0 -3.5 -1.924 -3.5 -4c0 -3.68 1.57 -6.255 4.613 -7.56a2 2 0 0 1 1.387 -3.44z"
        stroke-width="0"
        fill={color}
      ></path>
      <path d="M12 5v1" stroke-width="0" fill={color}></path>
      <path
        d="M18 18h-12a1 1 0 0 0 -1 1a2 2 0 0 0 2 2h10a2 2 0 0 0 1.987 -1.768l.011 -.174a1 1 0 0 0 -.998 -1.058z"
        stroke-width="0"
        fill={color}
      ></path>
    </>
  );
};
