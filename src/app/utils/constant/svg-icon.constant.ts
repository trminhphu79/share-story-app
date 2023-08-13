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
    {
        urlIcon: "assets/icons/ic_default_avatar.svg",
        key: "ic_default_avatar"
    },
    {
        urlIcon: "assets/icons/ic_search.svg",
        key: "ic_search"
    },
    {
        urlIcon: "assets/icons/ic_trending.svg",
        key: "ic_trending"
    }
]

const CORE_ICONS: TIconsList[] = [

]

export const SVG_ICONS: TIconsList[] = [
    ...CORE_ICONS,
    ...SOCIAL_ICIONS
]

