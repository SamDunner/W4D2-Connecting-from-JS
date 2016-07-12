const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({  //creates reference to database
    user:     settings.user,
    password: settings.password,
    database: settings.database,
    host:     settings.hostname,
    port:     settings.port,
    ssl:      settings.ssl
});

client.connect((err) => { //connect to database, pass in callback in case it doesn't connect
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query("SELECT $1::int AS number", ["1"], (err, result) => { // if it works, pass in a query (if you have parameters, pass them in with placeholders, like follows, and pass in as array)
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result.rows[0].number); //output: 1
    client.end();
  });
});