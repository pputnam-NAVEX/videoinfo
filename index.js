const electron = require('electron');

const { app, BrowserWindow, ipcMain } = electron;

app.on('ready', () => {
    const mainWindow = new BrowserWindow({});
    mainWindow.loadURL(`file://${__dirname}/index.html`); 
});

// receiving from index.html video file path variable
ipcMain.on('')