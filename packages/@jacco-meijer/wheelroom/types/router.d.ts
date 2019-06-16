export interface NamedPaths {
    [pathName: string]: {
        path: string;
        [localeName: string]: string;
    };
}
