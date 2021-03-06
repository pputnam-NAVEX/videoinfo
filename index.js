const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');

const { app, BrowserWindow, ipcMain } = electron;
const path = require("path");
const fs = require("fs");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

async function createWindow() {

  // Create the browser window.
  win = new BrowserWindow({
    webPreferences: {
      contextIsolation: true, // protect against prototype pollution
      enableRemoteModule: false, // turn off remote
      preload: path.join(__dirname, "preload.js") // use a preload script
    }
  });

  // Load app
  win.loadFile(path.join(__dirname, "index.html"));

  // rest of code..
}

app.on("ready", createWindow);

// receiving from and sending to index.html video file path variable
ipcMain.on("toMain", (event, args) => {
    fs.readFile("path/to/file", (error, data) => {
        ffmpeg.ffprobe(args, (err, metadata) => {
            win.webContents.send("fromMain", metadata.format.duration);
        });
    });
});