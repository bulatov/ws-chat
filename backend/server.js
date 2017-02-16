var ws = require("nodejs-websocket");

var server = ws.createServer(function (conn) {
    console.log("New connection");
    conn.on("text", function (str) {
        console.log("Received "+str);
        broadcast(server, str);
    });
    conn.on("close", function (code, reason) {
        console.log(code);
        console.log(JSON.stringify(reason));
        console.log("Connection closed");
    });
    conn.on('error', function () {
    });
}).listen(8001);

function broadcast(server, msg) {
    server.connections.forEach(function (conn) {
        conn.sendText(msg);
    });
}
