const { DB_USER, DB_PASS, DB_NAME, DB_HOST, DB_PORT, NODE_ENV } = process.env;


module.exports = {
  client: 'pg',
  connection: `postgresql://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
}