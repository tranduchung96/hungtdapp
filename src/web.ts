import { WebPlugin } from '@capacitor/core';

import type { HungtdAppPlugin } from './definitions';

export class HungtdAppWeb extends WebPlugin implements HungtdAppPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
