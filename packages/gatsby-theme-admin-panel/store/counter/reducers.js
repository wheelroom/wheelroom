Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
exports.counterInitialState = {
    count: 99,
};
exports.counterReducer = (state = exports.counterInitialState, action) => {
    switch (action.type) {
        case types_1.COUNT_UP: {
            return Object.assign({}, state, {
                count: state.count + 1,
            });
        }
        default:
            return state;
    }
};
//# sourceMappingURL=reducers.js.map