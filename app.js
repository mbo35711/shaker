
// This is the mainline of the electron server. 
// It is responsible for creating the main window and handling the main process of the application.

const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let win;


function createWindow() {
    // Create the browser window.
    win = BrowserWindow({ width: 800, height: 600 });
    
    // Load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    // Open the DevTools.
    win.webContents.openDevTools();

    // Emitted when the window is closed.
    win.on('closed', () => {
        win = null;
    });
    
    
}


app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});




