import {Theme} from './plaid/model/theme';

declare global {
  interface Window {
    // Exposed by preload.js
    plaid: {
      openExternal(url: string): Promise<void>;
      setThemeSource(theme: Theme): Promise<void>;
    };
  }
}
