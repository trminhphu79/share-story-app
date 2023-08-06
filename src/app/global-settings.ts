import { environment } from '@environment';

export const GLOBAL_SETTINGS = {
    production: environment.production,
    version: environment.version,
    domain: environment.domain,
    restURL: environment.restURL,
    apiVersion: environment.apiVersion,
    enableWebsocket: environment.enableWebsocket,
    root: environment.root,
    language: environment.language,
    license: environment.license
}
