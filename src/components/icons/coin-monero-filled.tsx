interface Props {
  color?: string;
}
export const IconCoinMoneroFilled = ({ color }: Props) => {
  return (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M15 11.414v4.586a1 1 0 0 0 1 1l4.66 .001a10 10 0 0 1 -17.32 0l4.66 -.001l.117 -.007a1 1 0 0 0 .883 -.993v-4.585l2.293 2.292l.094 .083a1 1 0 0 0 1.32 -.083l2.293 -2.293zm2 -8.074a10 10 0 0 1 4.54 11.66h-4.54v-6c0 -.89 -1.077 -1.337 -1.707 -.707l-3.293 3.292l-3.293 -3.292l-.084 -.076c-.637 -.514 -1.623 -.07 -1.623 .783v6h-4.54a9.991 9.991 0 0 1 -.46 -3l.005 -.324a10 10 0 0 1 14.995 -8.336z"
        stroke-width="0"
        fill={color}
      ></path>
    </>
  );
};
