'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

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
//# sourceMappingURL=plugin.cjs.js.map
