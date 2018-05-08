module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql:///knex3'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },

};