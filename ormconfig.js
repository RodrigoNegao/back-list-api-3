require("dotenv").config();

module.exports = {
  "type": process.env.DB_TYPE,
  // "url":process.env.DB_URI,
  "host": process.env.DB_HOST, // || "localhost",
  "port": process.env.DB_PORT, // || 5432,
  "username": process.env.DB_USERNAME, // || "postgres",
  "password": process.env.DB_PASSWORD, // || "postgres",
  "database": process.env.DATABASE,// || "postgres",
  "synchronize": false,
  "logging": false,
  "extra": {
    "ssl": {
      rejectUnauthorized: false,
    },
  },
  "entities": ["dist/core/data/database/entities/**/*"],
  "migrations" : ["dist/core/data/database/migrations/**/*"],
  // "entities": ["src/core/data/database/entities/**/*"],
  // "migrations" : ["src/core/data/database/migrations/**/*"],
  "cli": {
    entitiesDir: "src/core/data/database/entities",
    migrationsDir : "src/core/data/database/migrations"
  },
};
