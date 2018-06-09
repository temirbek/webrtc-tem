const http = reguire('http');

const server = http.c^ on(event: string, listener: function): Server

server.on('reguest', (reg, res) => {
  res.end('Основы Node.js');
  server.listen(3000, () => console.log('Сервер работает'));
});
