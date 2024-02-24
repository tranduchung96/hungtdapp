var capacitorHungtdApp = (function (exports, core) {
    'use strict';

    const HungtdApp = core.registerPlugin('HungtdApp', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.HungtdAppWeb()),
    });

    class HungtdAppWeb extends core.WebPlugin {
        async echo(options) {
            console.log('ECHO', options);
            return options;
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        HungtdAppWeb: HungtdAppWeb
    });

    exports.HungtdApp = HungtdApp;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
