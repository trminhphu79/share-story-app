import { Injectable, InjectionToken, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SVG_ICONS } from '@utils/constant';

export type TIconsList = {
    urlIcon: string,
    key: string
};

@Injectable()
export class IconRegistryService {
    iconRegistry: MatIconRegistry = inject(MatIconRegistry)
    sanitizer: DomSanitizer = inject(DomSanitizer);


    registerIcons(icons: TIconsList[]): void {
        icons.forEach((icon) => {
            this.iconRegistry.addSvgIcon(icon.key, this.sanitizer.bypassSecurityTrustResourceUrl(icon.urlIcon));
        })
    }
}

