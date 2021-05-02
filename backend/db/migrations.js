const dbManager = require('./dbmanager');

try {
    dbManager().createUsersTable();
    dbManager().createTweetsTable();
} catch (errors) {
    console.log("Failed to run database migrations.");
    console.log(errors);
}
