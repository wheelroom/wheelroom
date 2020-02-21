export interface CounterState {
    count: number;
}
export declare const COUNT_UP = "COUNT_UP";
export interface CountUpAction {
    type: typeof COUNT_UP;
    payload: CounterState;
}
export declare type CounterActionTypes = CountUpAction;
