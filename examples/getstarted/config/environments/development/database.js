const sqlite = {
  connector: 'strapi-hook-bookshelf',
  settings: {
    client: 'sqlite',
    filename: '.tmp/data.db',
  },
  options: {
    // debug: true,
    useNullAsDefault: true,
  },
};

const postgres = {
  connector: 'strapi-hook-bookshelf',
  settings: {
    client: 'postgres',
    database: 'strapi',
    username: 'strapi',
    password: 'strapi',
    port: 5432,
    host: 'localhost',
  },
  options: {},
};

const mysql = {
  connector: 'strapi-hook-bookshelf',
  settings: {
    client: 'mysql',
    database: 'strapi',
    username: 'strapi',
    password: 'strapi',
    port: 3306,
    host: 'localhost',
  },
  options: {},
};

const mongo = {
  connector: 'strapi-hook-mongoose',
  settings: {
    database: 'strapi',
    username: 'root',
    password: 'strapi',
    port: 27017,
    host: 'localhost',
  },
  options: {},
};

const db = {
  mysql,
  sqlite,
  postgres,
  mongo,
};

module.exports = {
  defaultConnection: 'default',
  connections: {
    default: process.env.DB ? db[process.env.DB] || db.postgres : db.postgres,
  },
};
