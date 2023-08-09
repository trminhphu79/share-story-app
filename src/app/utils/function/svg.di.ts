import { InjectionToken } from "@angular/core";
import { SVG_ICONS } from "@utils/constant";
import { IconRegistryService, TIconsList } from "@utils/service";

export const ICON_CONFIG_TOKEN = new InjectionToken<TIconsList[]>('IconList', {
    providedIn: "root",
    factory() {
        return SVG_ICONS
    },
})

export function initIconRegistry(iconRegistryService: IconRegistryService, icons: TIconsList[]): () => void {
    console.log("initIconRegistry....")
    return () => iconRegistryService.registerIcons(icons);
}