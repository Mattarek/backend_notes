require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3001,
  database: process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/notes_class",
};
