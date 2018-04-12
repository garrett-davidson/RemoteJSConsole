# RemoteJSConsole
A simple console to execute Javascript in a remote browser.

This project allows creating a remote JavaScript shell in your browser. It opens an HTML5 WebSocket between the local browser and a remote WebSocket server. Text frames sent to the local browser are `eval`ed and any output or errors are sent back to the server.

## Usage
### Remote console
1. Run `python WebSocketConsole/websocketconsole.py <port>`.
2. Wait for the client to connect.
3. When the client connects, type JavaScript into the console and press return to execute it on the client. Command output and errors are displayed when the command finishes.

### Local browser
1. Put the index.html and index.js files somewhere that the local browser can access.
2. Open index.html in the browser.
3. In the address field, enter the address of the remote console in the form `ws://<consoleip>:<consoleport>/`
4. Press Connect.
5. Any JavaScript being run, including output and errors, should be displayed in the textarea and sent to the remote console.

## Known Issues
* Because of an issue with WebSocketConsole, messages longer than 126 characters will result in undefined behavior.
