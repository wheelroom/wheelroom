import { ComponentConfig } from './components-map';
import { Model } from './model';
export interface ModelApiContext {
    asset: any;
    contentfulClient: any;
    contentType: any;
    currentModel: Model;
    entry: any;
    fields: any;
    editorInterface: any;
    environment: any;
    componentConfigs: ComponentConfig[];
    space: any;
    upload?: any;
}
