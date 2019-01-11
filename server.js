const RegisterApp = require('.');

process.on('unhandleRejection', (err) => {

  console.log(err);
  process.exit(1);
});

RegisterApp().then(async (server) => {

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
});