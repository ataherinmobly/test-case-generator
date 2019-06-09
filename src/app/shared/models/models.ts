export interface IQueryParam {
    propertyName: string;
    queryValue: string;
    queryMethod: string;
}
export interface IFaker {
    object: string;
    function: string;
}
export interface ICommand {
    type: string;
    selector?: string;
    toFind?: boolean;
    isFake?: boolean;
    queryParams?: IQueryParam;
    faker: IFaker;
    text?: string;
    url?: string;
    waitFor?: number;
    path?: string;
}

export enum Types {
    click,
    write,
    route,
    screenshot
}
