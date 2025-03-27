const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS inventory (id SERIAL PRIMARY KEY, name TEXT NOT NULL, pokename TEXT NOT NULL, category TEXT NOT NULL);
INSERT INTO inventory (name, pokename, category) VALUES 
('Ash Ketchum', 'Pikachu', 'Electric'),
('Ash Ketchum', 'Charizard', 'Fire/Flying'),
('Misty', 'Starmie', 'Water'),
('Misty', 'Psyduck', 'Water'),
('Brock', 'Onix', 'Rock'),
('Brock', 'Geodude', 'Rock/Ground'),
('Gary Oak', 'Blastoise', 'Water'),
('Gary Oak', 'Arcanine', 'Fire'),
('Giovanni', 'Nidoking', 'Ground/Poison'),
('Giovanni', 'Persian', 'Normal');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DB_STRING,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
