const WebSocket = require('ws')

const wss = new WebSocket.Server({port:8888})

// 当有客户端连接时触发
wss.on('connection', (socket) => {
    console.log('Client connected');
  
    // 处理收到的消息
    socket.on('message', (data) => {
      console.log(`Received: ${data}`);
        console.log(wss.clients)
        wss.send('data')
      // 广播消息给所有连接的客户端
      wss.clients.forEach((client) => {
        console.log(client)
        if (client !== socket && client.readyState === WebSocket.OPEN) {
            console.log(data,'daat')
          client.send(data);
        }
      });
    });
  
    // 处理连接关闭
    socket.on('close', () => {
      console.log('Client disconnected');
    });
  });