import { TIconsList } from "@utils/service";

const SOCIAL_ICIONS: TIconsList[] = [
    {
        urlIcon: "assets/icons/ic_hambuger.svg",
        key: "ic_hambuger"
    },
    {
        urlIcon: "assets/icons/ic_notification.svg",
        key: "ic_notification"
    },
    {
        urlIcon: "assets/icons/ic_arrow-down.svg",
        key: "ic_arrow-down"
    },
    {
        urlIcon: "assets/icons/ic_facebook.svg",
        key: "ic_facebook"
    },
    {
        urlIcon: "assets/icons/ic_google-color.svg",
        key: "ic_google-color"
    },
]

const CORE_ICONS: TIconsList[] = [

]

export const SVG_ICONS: TIconsList[] = [
    ...CORE_ICONS,
    ...SOCIAL_ICIONS
]

