import { NamedPaths } from './types/named-paths';
export declare const getNamedPath: ({ locale, namedPaths, pathName, slug, }: {
    locale: string;
    namedPaths: NamedPaths;
    pathName: string;
    slug?: string | undefined;
}) => string;
export declare const normalizedPath: (path: string) => string;
