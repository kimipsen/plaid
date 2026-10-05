const {contextBridge, ipcRenderer} = require('electron');

// The only Electron functionality exposed to the renderer. Theme changes are observed in the renderer through the
// prefers-color-scheme media query, which follows nativeTheme.themeSource.
contextBridge.exposeInMainWorld('plaid', {
  openExternal: url => ipcRenderer.invoke('open-external', url),
  setThemeSource: theme => ipcRenderer.invoke('set-theme-source', theme)
});
