// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'knex_labs',
      // if you are using linux or ubunto you might need to put the username and password here
      username: '',
      password: ''
      // if you don't know your password, do these steps to reset
      // 1) in the terminal connect to your psql
      // 2) inside psql do command \password
      // 3) enter the new password
    },
    migrations: {
      tableName: "migrations",
      directory: 'db'
    },
    seeds: {
      directory: "seeds"
    }
  }

};
