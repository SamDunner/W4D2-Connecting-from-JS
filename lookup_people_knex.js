const settings = require("./settings");
var pg = require('knex')(
  {client: 'pg',
   connection: {
  user:     settings.user,
  password: settings.password,
  database: settings.database,
  host:     settings.hostname,
  port:     settings.port,
  ssl:      settings.ssl
}});
const args = process.argv.slice(2);

const $1 = args[0];


pg('famous_people').select('*').where('first_name', $1).orWhere('last_name', $1).asCallback(function(err, rows) {
  if (err) return console.error(err);
  console.log(rows);
});

// client.connect((err) => {
//   if (err) {
//     return console.error("Connection Error", err);
//   }
//   client.query("SELECT * FROM famous_people WHERE last_name = $1 OR first_name = $1",
//               [args[0]], (err, result) => {
//     if (err) {
//       return console.error("error running query", err);
//     }
//     console.log("searching...")
//     console.log(result.rows[0]);
//     client.end();
//   });
// });