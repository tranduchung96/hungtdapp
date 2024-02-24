import { WebPlugin } from '@capacitor/core';
import type { HungtdAppPlugin } from './definitions';
export declare class HungtdAppWeb extends WebPlugin implements HungtdAppPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
