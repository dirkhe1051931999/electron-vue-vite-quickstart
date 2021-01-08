/**
 * electron 主文件
 */
import { join } from 'path';
import { app, BrowserWindow, Menu } from 'electron';
import is_dev from 'electron-is-dev';
import dotenv from 'dotenv';
dotenv.config({ path: join(__dirname, '../../.env') });

let win: BrowserWindow;
// 创建
function createWin() {
  // 创建浏览器窗口
  win = new BrowserWindow({
    height: 795,
    maxHeight: 795,
    useContentSize: true,
    width: 1440,
    resizable: true,
    maximizable: false,
    frame: true,
    transparent: false,
    hasShadow: false,
    autoHideMenuBar: true,
    titleBarStyle: 'hiddenInset',
    backgroundColor: '#f5f5f5',
    webPreferences: {
      enableRemoteModule: true,
      devTools: false,
      nodeIntegrationInWorker: true,
      nodeIntegration: true,
    },
  });
  win.setMenu(null);
  win.webContents.once('dom-ready', () => {
    win.webContents.openDevTools();
  });
  Menu.setApplicationMenu(null);
  if (process.platform === 'darwin') app.dock.hide();
  win.on('resize', (event: Event) => {
    if (win.isMaximized()) {
      event.preventDefault();
      win.unmaximize();
    }
  });
  const URL = is_dev
    ? `http://localhost:${process.env.PORT}` // vite 启动的服务器地址
    : `file://${join(__dirname, '../render/index.html')}`; // vite 构建后的静态文件地址

  win?.loadURL(URL);
}
// 限制一个窗口
function limitOneWindow() {
  const gotTheLock = app.requestSingleInstanceLock();
  if (!gotTheLock) {
    app.quit();
    return;
  }
  app.on('second-instance', (event, commandLine, workingDirectory) => {
    // 当运行第二个实例时,将会聚焦到mainWindow这个窗口
    if (win) {
      if (win.isMinimized()) win.restore();
      win.focus();
      win.show();
    }
  });
}
// 初始化操作
function initMain() {
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });
  app.on('activate', () => {
    if (!win) createWin();
  });
  app.whenReady().then(createWin);
  limitOneWindow();
}
initMain();
