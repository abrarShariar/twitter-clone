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
                    username TEXT NOT NULL UNIQUE,
                    password TEXT NOT NULL,
                    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
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
                    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    FOREIGN KEY(user_id) REFERENCES Users(id)
                )
            `;
            db.run(sql);
        },
    
        createUser: function ({ username, hashedPassword }) {
            const sql = `
                INSERT INTO Users ( 
                    username, password
                ) VALUES (
                    "${username}", "${hashedPassword}"
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
            return new Promise((resolve, reject) => {
                db.run(sql, (err) => {
                    if (err) {
                        console.error(err.message);
                        reject(false);
                    }
                    resolve(true);
                });
            })
        },

        getTweets: function (limit = 100, offset = 0) {
            const sql = `
                SELECT 
                    Tweets.id, Tweets.user_id, Users.username, Tweets.tweet, Tweets.timestamp
                FROM 
                    Tweets
                JOIN
                    Users
                ON 
                    Tweets.user_id = Users.id
                LIMIT ${limit}
                OFFSET ${offset}
            `;
            return new Promise((resolve, reject) => {
                db.all(sql, (err, row) => {
                    if (err) {
                        reject(err.message);
                    }
                    resolve(row);
                });
            });
        }

    }
}

module.exports = DBManager;