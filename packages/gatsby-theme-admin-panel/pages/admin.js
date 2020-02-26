var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const provider_1 = require("../lib/provider");
const Modules = (props) => {
    const moduleList = Object.entries(props.modules).map(([moduleName, module]) => {
        return (react_1.default.createElement("li", { key: moduleName },
            module.heading,
            " - ",
            module.path));
    });
    return react_1.default.createElement("ul", null, moduleList);
};
const AdminPanel = (props) => {
    const { adminPanelState } = react_1.useContext(provider_1.AdminModuleContext);
    const updates = react_1.useContext(provider_1.UpdateAdminModuleContext);
    console.log('render: admin panel', updates, adminPanelState);
    react_1.useEffect(() => {
        console.log('admin panel - newState', updates, adminPanelState);
    }, [adminPanelState]);
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement("h1", null,
            "Admin panel ",
            updates),
        react_1.default.createElement("p", null, "This is a work in progress."),
        react_1.default.createElement(Modules, { modules: adminPanelState.modules })));
};
exports.default = AdminPanel;
//# sourceMappingURL=admin.js.map