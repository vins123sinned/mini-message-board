// optional as process is global, but doing it to follow ESM module practice
import { argv } from "node:process";
import { Client } from "pg";

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 80 ) NOT NULL,
  text VARCHAR ( 255 ) NOT NULL,
  added TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO messages (username, text)
VALUES 
  ('Oscar Wilde', 'Be yourself; everyone else is already taken.'),
  ('William Shakespeare', 'To be, or not to be, that is the question'),
  ('J.K. Rowling', 'If you want to know what a man''s like, take a good look at how he treats his inferiors, not his equals.'),
  ('Maya Angelou', 'I''ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.'),
  ('Andre Gide', 'It is better to be hated for what you are than to be loved for what you are not.');
`;

const main = async () => {
  console.log("seeding...");
  const client = new Client({
    connectionString: argv[2],
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
};

main();
