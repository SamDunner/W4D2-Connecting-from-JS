var first_name = process.argv[2];
var last_name = process.argv[3];
var birthdate = process.argv[4];
const settings = require("./settings");
var knex = require('knex')({
    client: 'pg',
    connection: {
      user:     settings.user,
      password: settings.password,
      database: settings.database,
      host:     settings.hostname,
      port:     settings.port,
      ssl:      settings.ssl
    }
  });
const args = process.argv.slice(2);
const person = {
  first_name: first_name,
  last_name: last_name,
  birthdate: birthdate
};
console.log(person)

knex('famous_people').insert(person).then(function(result) {
  console.log(result);
  process.exit();
});

