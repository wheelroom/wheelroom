var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createStore_1 = __importDefault(require("./src/state/createStore"));
exports.wrapWithProvider = ({ element }) => {
    const store = createStore_1.default();
    return store;
    {
        store;
    }
     > { element } < /Provider>;
};
//# sourceMappingURL=wrap-with-provider.js.map