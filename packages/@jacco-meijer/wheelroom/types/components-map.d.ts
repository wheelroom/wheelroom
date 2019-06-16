import { Model } from './model';
export interface ComponentConfig {
    fragment?: any;
    model: Model;
    query?: any;
}
export interface ComponentsMap {
    [componentType: string]: ComponentConfig;
}
