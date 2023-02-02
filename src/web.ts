import { WebPlugin } from '@capacitor/core';

import type { WifiPluginPlugin } from './definitions';

export class WifiPluginWeb extends WebPlugin implements WifiPluginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
