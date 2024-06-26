interface Props {
  color?: string;
}
export const IconArchiveFilled = ({ color }: Props) => {
  return (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <rect
        x="2"
        y="3"
        width="20"
        height="4"
        rx="2"
        stroke-width="0"
        fill={color}
      ></rect>
      <path
        d="M19 9c.513 0 .936 .463 .993 1.06l.007 .14v7.2c0 1.917 -1.249 3.484 -2.824 3.594l-.176 .006h-10c-1.598 0 -2.904 -1.499 -2.995 -3.388l-.005 -.212v-7.2c0 -.663 .448 -1.2 1 -1.2h14zm-5 2h-4l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h4l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z"
        stroke-width="0"
        fill={color}
      ></path>
    </>
  );
};
