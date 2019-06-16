export interface ComponentType {
    componentType: string;
    variations: string[];
    overwriteVariations: boolean;
}
export interface ComponentTypesByModule {
    [moduleName: string]: ComponentType[];
}
export interface ThemeOptions {
    defaultLocale: string;
    defaultComponentResolve: string;
    componentTypes: {
        [componentType: string]: {
            resolve: string;
            variations: string[];
            overwriteVariations: boolean;
        };
    };
    pageTemplate: string;
}
export interface GatsbyThemeConfig {
    options: ThemeOptions;
    resolve: string;
}
