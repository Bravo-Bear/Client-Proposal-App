module.exports = async (server, payload) => {
  // Create a new Client
  const { Client } = server.plugins.db;

  const clients = Client
    .query()
    .allowInsert('[company_name, address, phone_number, email, website]')
    .insert(payload);

  return await clients;
};