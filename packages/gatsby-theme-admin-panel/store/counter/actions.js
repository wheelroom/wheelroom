Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
function countUp(newCounter) {
    return {
        type: types_1.COUNT_UP,
        payload: newCounter,
    };
}
exports.countUp = countUp;
//# sourceMappingURL=actions.js.map