interface Props {
  color?: string;
}
export const IconCarouselVerticalFilled = ({ color }: Props) => {
  return (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M18 6h-12a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-8a2 2 0 0 0 -2 -2z"
        stroke-width="0"
        fill={color}
      ></path>
      <path
        d="M16 19a2 2 0 0 1 1.995 1.85l.005 .15v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1h-8v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a2 2 0 0 1 1.85 -1.995l.15 -.005h8z"
        stroke-width="0"
        fill={color}
      ></path>
      <path
        d="M17 1a1 1 0 0 1 .993 .883l.007 .117v1a2 2 0 0 1 -1.85 1.995l-.15 .005h-8a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-1a1 1 0 0 1 1.993 -.117l.007 .117v1h8v-1a1 1 0 0 1 1 -1z"
        stroke-width="0"
        fill={color}
      ></path>
    </>
  );
};
