var app = angular.module('response.services.socketService', []);

app.factory('SocketService',function(socketFactory){
	//Create socket and connect to http://chat.socket.io
 	var myIoSocket = io.connect('localhost:30011');

  	mySocket = socketFactory({
    	ioSocket: myIoSocket
  	});

	return mySocket;
})
