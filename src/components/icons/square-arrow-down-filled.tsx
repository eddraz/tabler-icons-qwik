interface Props {
  color?: string;
}
export const IconSquareArrowDownFilled = ({ color }: Props) => {
  return (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-7 5a1 1 0 0 0 -1 1v5.585l-2.293 -2.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l4 4l.094 .083l.092 .064l.098 .052l.11 .044l.112 .03l.126 .017l.075 .003l.117 -.007l.149 -.029l.105 -.035l.113 -.054l.111 -.071a.939 .939 0 0 0 .112 -.097l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32l-.094 -.083a1 1 0 0 0 -1.32 .083l-2.293 2.292v-5.585l-.007 -.117a1 1 0 0 0 -.993 -.883z"
        stroke-width="0"
        fill={color}
      ></path>
    </>
  );
};
