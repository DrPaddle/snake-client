const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on('connect', (connect) => {
    conn.write('Name: SP');
    console.log('Successfully connected to game server');
   });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });


  conn.setEncoding('utf8');
  return conn;
}

module.exports = connect;