const electron = require('electron');

const { app, BrowserWindow } = electron;

app.on('ready', () => {
    // opens an empty window on command $ npm run electron
    new BrowserWindow({}); 
});