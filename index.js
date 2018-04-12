var outField = document.getElementById("output")

outField.append = function(string) {
    outField.textContent += string + "\n"
}

var ws = null;

function appendAndSend(prefix, string) {
    outString = prefix + string
    outField.append(outString)

    if (ws && ws.OPEN) {
        ws.send(outString)
    }
}

function handleError(string) {
    appendAndSend("Error: ", string)
}

function handleLog(string) {
    appendAndSend("Log: ", string)
}

function handleMessage(string) {
    appendAndSend("Message: ", string)
}

function handleReceive(event) {
    var received_msg = event.data;
    outField.append("Received:")
    outField.append(received_msg)

    var result = eval(received_msg)
    outField.append(result)
    ws.send(result)
}

function openSocket(address) {
    ws = new WebSocket(address);
    ws.onopen = function() {
        console.log("Opened socket")
    }

    ws.onmessage = handleReceive

    ws.onclose = function(event)
    {
        console.log(event)
        alert("Connection closed...");
    };
}

function connect() {
    var address = document.getElementById("connectionaddressfield").value
    openSocket(address)
}

function onLoad() {
    window.onerror = handleError
    window.onmessage = handleMessage
    console.log = handleLog
    outField.append(navigator.userAgent)
}

onLoad()
