const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '172.46.2.204',
    port: 50541
  });

  conn.on('connect', (connect) => {
    conn.write('Name: SP');
    console.log('Successfully connected to game server');
    //conn.write("Move: up")
    // setInterval(() => {
    //   conn.write("Move: up"), 1500
    // })
    // setInterval(() => {
    //   conn.write("Move: right"), 1500
    // })

    // setInterval(() => {
    //   conn.write("Move: down"),1500
    // })

  //   setInterval(() => {
  //     conn.write("Move: left"), 1500
  //   })
   });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });


  conn.setEncoding('utf8');
  return conn;
}

module.exports = connect;