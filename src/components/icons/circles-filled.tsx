interface Props {
  color?: string;
}
export const IconCirclesFilled = ({ color }: Props) => {
  return (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M6.5 12a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
        stroke-width="0"
        fill={color}
      ></path>
      <path
        d="M17.5 12a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
        stroke-width="0"
        fill={color}
      ></path>
      <path
        d="M12 2a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
        stroke-width="0"
        fill={color}
      ></path>
    </>
  );
};
