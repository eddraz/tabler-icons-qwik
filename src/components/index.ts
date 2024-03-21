import { Component } from "@builder.io/qwik";
import { TwelveHoursIcon } from "./icons/12-hours";
import { OneTwoThreeIcon } from "./icons/123";
import { ActivityIcon } from "./icons/activity";
import { BoneIcon } from "./icons/bone";
import { CatIcon } from "./icons/cat";
import { ChevronDownIcon } from "./icons/chevron-down";
import { ChevronRightIcon } from "./icons/chevron-right";
import { ClipboardHeartIcon } from "./icons/clipboard-heart";
import { ComponentsIcon } from "./icons/components";
import { DogIcon } from "./icons/dog";
import { DogBowlIcon } from "./icons/dog-bowl";
import { NewsIcon } from "./icons/news";
import { ShoppingCartIcon } from "./icons/shopping-cart";
import { StethoscopeIcon } from "./icons/stethoscope";
import { UserCircleIcon } from "./icons/user-circle";
import { ZeppelinIcon } from "./icons/zeppelin";
import { ZeppelinOffIcon } from "./icons/zeppelin-off";
import { ZipIcon } from "./icons/zip";
import { ZodiacAquariusIcon } from "./icons/zodiac-aquarius";
import { ZodiacAriesIcon } from "./icons/zodiac-aries";
import { ZodiacCapricornIcon } from "./icons/zodiac-capricorn";
import { ZodiacGeminiIcon } from "./icons/zodiac-gemini";
import { ZodiacLeoIcon } from "./icons/zodiac-leo";
import { ZodiacLibraIcon } from "./icons/zodiac-libra";
import { ZodiacPiscesIcon } from "./icons/zodiac-pisces";
import { ZodiacSagittariusIcon } from "./icons/zodiac-sagittarius";
import { ZodiacScorpioIcon } from "./icons/zodiac-scorpio";
import { ZodiacTaurusIcon } from "./icons/zodiac-taurus";
import { ZodiacVirgoIcon } from "./icons/zodiac-virgo";
import { ZoomCancelIcon } from "./icons/zoom-cancel";
import { ZoomCheckIcon } from "./icons/zoom-check";
import { ZoomCheckFilledIcon } from "./icons/zoom-check-filled";
import { ZoomCodeIcon } from "./icons/zoom-code";
import { ZoomExclamationIcon } from "./icons/zoom-exclamation";
import { ZoomFilledIcon } from "./icons/zoom-filled";
import { ZoomInIcon } from "./icons/zoom-in";
import { ZoomInAreaIcon } from "./icons/zoom-in-area";
import { ZoomInAreaFilledIcon } from "./icons/zoom-in-area-filled";
import { ZoomMoneyIcon } from "./icons/zoom-money";
import { ZoomOutIcon } from "./icons/zoom-out";
import { ZoomOutAreaIcon } from "./icons/zoom-out-area";
import { ZoomOutFilledIcon } from "./icons/zoom-out-filled";
import { ZoomPanIcon } from "./icons/zoom-pan";
import { ZoomReplaceIcon } from "./icons/zoom-replace";
import { ZoomResetIcon } from "./icons/zoom-reset";
import { ZoomScanIcon } from "./icons/zoom-scan";
import { ZzzIcon } from "./icons/zzz";
import { ZzzOffIcon } from "./icons/zzz-off";
import { IconNameT } from "../interfaces/icon.interface";

export const Icons: Record<IconNameT, Component> = {
  "12-hours": TwelveHoursIcon,
  123: OneTwoThreeIcon,
  activity: ActivityIcon,
  bone: BoneIcon,
  cat: CatIcon,
  "chevron-down": ChevronDownIcon,
  "chevron-right": ChevronRightIcon,
  "clipboard-heart": ClipboardHeartIcon,
  components: ComponentsIcon,
  "dog-bowl": DogBowlIcon,
  dog: DogIcon,
  news: NewsIcon,
  "shopping-cart": ShoppingCartIcon,
  stethoscope: StethoscopeIcon,
  "user-circle": UserCircleIcon,
  zeppelin: ZeppelinIcon,
  "zeppelin-off": ZeppelinOffIcon,
  zip: ZipIcon,
  "zodiac-aquarius": ZodiacAquariusIcon,
  "zodiac-aries": ZodiacAriesIcon,
  "zodiac-cancer": ZoomCancelIcon,
  "zodiac-capricorn": ZodiacCapricornIcon,
  "zodiac-gemini": ZodiacGeminiIcon,
  "zodiac-leo": ZodiacLeoIcon,
  "zodiac-libra": ZodiacLibraIcon,
  "zodiac-pisces": ZodiacPiscesIcon,
  "zodiac-sagittarius": ZodiacSagittariusIcon,
  "zodiac-scorpio": ZodiacScorpioIcon,
  "zodiac-taurus": ZodiacTaurusIcon,
  "zodiac-virgo": ZodiacVirgoIcon,
  "zoom-cancel": ZoomCancelIcon,
  "zoom-check": ZoomCheckIcon,
  "zoom-check-filled": ZoomCheckFilledIcon,
  "zoom-code": ZoomCodeIcon,
  "zoom-exclamation": ZoomExclamationIcon,
  "zoom-filled": ZoomFilledIcon,
  "zoom-in": ZoomInIcon,
  "zoom-in-area": ZoomInAreaIcon,
  "zoom-in-area-filled": ZoomInAreaFilledIcon,
  "zoom-in-filled": ZoomFilledIcon,
  "zoom-money": ZoomMoneyIcon,
  "zoom-out": ZoomOutIcon,
  "zoom-out-area": ZoomOutAreaIcon,
  "zoom-out-filled": ZoomOutFilledIcon,
  "zoom-pan": ZoomPanIcon,
  "zoom-replace": ZoomReplaceIcon,
  "zoom-reset": ZoomResetIcon,
  "zoom-scan": ZoomScanIcon,
  zzz: ZzzIcon,
  "zzz-off": ZzzOffIcon,
};
