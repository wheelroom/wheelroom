var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const store_1 = require("./store");
exports.wrapWithProvider = (props) => {
    const store = store_1.createStore();
    return react_1.default.createElement(react_redux_1.Provider, { store: store }, props.element);
};
//# sourceMappingURL=wrap-with-provider.js.map