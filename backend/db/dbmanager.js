const sqlite3 = require('sqlite3');

const DBManager = () => {
    const db = new sqlite3.Database('./db/twitter.db', (err) => {
        if (err) {
            return console.error(err.message);
          }
        console.log('Connected to the in-memory SQlite database.');
    });

    return {
        createUsersTable: function() {
            const sql = `
                CREATE TABLE IF NOT EXISTS Users (
                    id INTEGER PRIMARY KEY,
                    email TEXT NOT NULL UNIQUE,
                    username TEXT NOT NULL UNIQUE,
                    password TEXT NOT NULL
                )
            `;
            db.run(sql);
        },
    
        createUser: function ({ email, username, hashedPassword }) {
            const sql = `
                INSERT INTO Users (
                    email, username, password
                ) VALUES (
                    "${email}", "${username}", "${hashedPassword}"
                )
            `;
    
            db.run(sql);
        },

        getUserByUsername: function ({ username }) {
            const sql = `
                SELECT 
                    username, password
                FROM 
                    Users
                WHERE
                    username = "${username}"
            `;
            return db.get(sql);
        }
    }
}

module.exports = DBManager;