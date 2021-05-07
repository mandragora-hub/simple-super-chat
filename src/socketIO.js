const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

const SocketIOMessage = (server) => {
    const io = require('socket.io')(server, {
        cors: {
            origin: '*',
        }
    })
    io.on('connection', (socket) => {
        // Join a conversation
        const { uuid } = socket.handshake.query;
        socket.join(uuid);

        // Listen for new messages
        socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => { 
            io.in(uuid).emit(NEW_CHAT_MESSAGE_EVENT, data);
        });

        // Leave the room if the user closes the socket
        socket.on("disconnect", () => {
            socket.leave(uuid);
        });
    })

}

module.exports = SocketIOMessage;
