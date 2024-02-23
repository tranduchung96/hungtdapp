import { registerPlugin } from '@capacitor/core';

import type { HungtdAppPlugin } from './definitions';

const HungtdApp = registerPlugin<HungtdAppPlugin>('HungtdApp', {
  web: () => import('./web').then(m => new m.HungtdAppWeb()),
});

export * from './definitions';
export { HungtdApp };
