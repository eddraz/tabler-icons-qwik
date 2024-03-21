import { OneTwoThreeIcon } from "./components/one-two-three";
import { TwelveHoursIcon } from "./components/twelve-hours";
import { TwentyFourHoursIcon } from "./components/twenty-four-hours";
import { TwofaIcon } from "./components/twofa";

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <TwelveHoursIcon />
        <OneTwoThreeIcon />
        <TwentyFourHoursIcon />
        <TwofaIcon />
      </body>
    </>
  );
};
