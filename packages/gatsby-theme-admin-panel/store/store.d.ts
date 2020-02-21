declare const rootReducer: import("redux").Reducer<import("redux").CombinedState<{
    counter: import("..").CounterState;
}>, import("..").CountUpAction>;
export declare type RootState = ReturnType<typeof rootReducer>;
export declare const createStore: () => import("redux").Store<import("redux").CombinedState<{
    counter: import("..").CounterState;
}>, import("..").CountUpAction>;
export {};
