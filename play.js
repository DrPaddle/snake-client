const net = require('net');
// establishes a connection with the game server

const connect = function() {
  const conn = net.createConnection({
    host: '172.46.2.204',
    port: 50541
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.setEncoding('utf8');
  return conn;
}
console.log('Connecting ...');
connect();