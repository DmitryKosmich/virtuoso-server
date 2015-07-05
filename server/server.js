(function () {
    'use strict';

    var app = require('express')();
    var http = require('http').Server(app);
    var io = require('socket.io')(http);

    io.on('connection', function(socket){

        setInterval(function () {
            socket.emit('server', { hello: new Date() });
        }, 5000);

        socket.on('answer', function (data) {
            console.log(data);
        });
    });

    http.listen(3000, function(){
        console.log('listening on *:3000');
    });

})();