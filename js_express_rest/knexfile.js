module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'knexpress_labs'
    }, migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations'
    }
  },

};
