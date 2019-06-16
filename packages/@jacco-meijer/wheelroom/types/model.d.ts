export interface Field {
    initialContent?: string | string[];
    settings?: {
        helpText: string;
    };
    specs: {
        items?: {
            linkType?: 'Entry';
            type: 'Link' | 'Symbol';
        };
        linkType?: 'Asset';
        localized?: boolean;
        name: string;
        required?: boolean;
        type: 'Symbol' | 'Array' | 'RichText' | 'Link' | 'Date';
        validations?: any[];
    };
    widgetId?: string;
}
export interface Model {
    contentBackend: 'contentful';
    description: string;
    displayField: string;
    fields: {
        [fieldId: string]: Field;
    };
    modelVersion: string;
    name: string;
    type: string;
    wheelroomType: 'page' | 'subPage' | 'section' | 'global';
}
