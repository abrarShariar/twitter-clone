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

        createTweetsTable: function() {
            const sql = `
                CREATE TABLE IF NOT EXISTS Tweets (
                    id INTEGER PRIMARY KEY,
                    user_id INTEGER NOT NULL,
                    tweet TEXT,
                    FOREIGN KEY(user_id) REFERENCES Users(id)
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

        getUserByUsername: function (username) {
            const sql = `
                SELECT 
                    username, password
                FROM 
                    Users
                WHERE
                    username = "${username}"
            `;

            return new Promise((resolve, reject) => {
                db.get(sql, (err, row) => {
                    if (err) {
                        console.error(err.message);
                        reject(err.message);
                    }
                    resolve(row);
                });
            });
        },

        createTweet: function ({userId, tweet}) {
            const sql = `
                INSERT INTO Tweets (
                    user_id, tweet
                ) VALUES (
                    "${userId}", "${tweet}"
                )
            `;
            db.run(sql);
            return new Promise((resolve, reject) => {
                db.run(sql, (err) => {
                    if (err) {
                        console.error(err.message);
                        reject(false);
                    }
                    resolve(true);
                });
            })
        }
    }
}

module.exports = DBManager;