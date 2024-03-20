import { ActivityIcon } from "./components/activity";
import { BoneIcon } from "./components/bone";
import { CatIcon } from "./components/cat";
import { ChevronDownIcon } from "./components/chevron-down";
import { ChevronRightIcon } from "./components/chevron-right";
import { ClipboardHeartIcon } from "./components/clipboard-heart";
import { ComponentsIcon } from "./components/components";
import { DogIcon } from "./components/dog";
import { DogBowlIcon } from "./components/dog-bowl";
import { NewsIcon } from "./components/news";
import { OneTwoThreeIcon } from "./components/one-two-three";
import { ShoppingCartIcon } from "./components/shopping-cart";
import { StethoscopeIcon } from "./components/stethoscope";
import { TwelveHoursIcon } from "./components/twelve-hours";
import { UserCircleIcon } from "./components/user-circle";
import { ZoomScanIcon } from "./components/zoom-scan";
import { ZzzIcon } from "./components/zzz";
import { ZzzOffIcon } from "./components/zzz-off";

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
        <ActivityIcon />
        <BoneIcon />
        <CatIcon />
        <ChevronDownIcon />
        <ChevronRightIcon />
        <ClipboardHeartIcon />
        <ComponentsIcon />
        <DogIcon />
        <DogBowlIcon />
        <NewsIcon />
        <ShoppingCartIcon />
        <StethoscopeIcon />
        <UserCircleIcon />
        <ZoomScanIcon />
        <ZzzIcon />
        <ZzzOffIcon />
      </body>
    </>
  );
};
