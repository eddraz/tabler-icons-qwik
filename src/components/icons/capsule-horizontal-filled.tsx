interface Props {
  color?: string;
}
export const IconCapsuleHorizontalFilled = ({ color }: Props) => {
  return (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M15 5h-6a7 7 0 1 0 0 14h6a7 7 0 0 0 7 -7l-.007 -.303a7 7 0 0 0 -6.993 -6.697z"
        stroke-width="0"
        fill={color}
      ></path>
    </>
  );
};
