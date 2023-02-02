import { registerPlugin } from '@capacitor/core';

import type { WifiPluginPlugin } from './definitions';

const WifiPlugin = registerPlugin<WifiPluginPlugin>('WifiPlugin', {
  web: () => import('./web').then(m => new m.WifiPluginWeb()),
});

export * from './definitions';
export { WifiPlugin };
