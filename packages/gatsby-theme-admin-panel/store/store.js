Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const reducers_1 = require("./counter/reducers");
const redux_2 = require("redux");
const reducers_2 = require("./counter/reducers");
const rootReducer = redux_1.combineReducers({
    counter: reducers_1.counterReducer,
});
const initialState = {
    counter: reducers_2.counterInitialState,
};
exports.createStore = () => redux_2.createStore(rootReducer, initialState);
//# sourceMappingURL=store.js.map