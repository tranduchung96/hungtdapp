import { registerPlugin } from '@capacitor/core';
const HungtdApp = registerPlugin('HungtdApp', {
    web: () => import('./web').then(m => new m.HungtdAppWeb()),
});
export * from './definitions';
export { HungtdApp };
//# sourceMappingURL=index.js.map