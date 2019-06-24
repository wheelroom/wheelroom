Object.defineProperty(exports, "__esModule", { value: true });
exports.getNamedPath = ({ locale, namedPaths, pathName, slug, }) => {
    const path = namedPaths[pathName][locale];
    if (slug) {
        const tokens = path.split('%');
        tokens.splice(1, 1);
        tokens.push(slug);
        return tokens.join('');
    }
    return exports.normalizedPath(path);
};
exports.normalizedPath = (path) => {
    if (path.charAt(0) !== '/') {
        return path;
    }
    if (path.slice(-1) !== '/') {
        return path + '/';
    }
    return path;
};
//# sourceMappingURL=named-paths.js.map