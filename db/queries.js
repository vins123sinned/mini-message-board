import { pool } from "./pool.js";

const getMessages = async () => {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
};

const getMessageById = async (id) => {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ]);
  return rows[0] || null;
};

const addMessage = async (username, message) => {
  await pool.query("INSERT INTO messages (username, text) VALUES ($1, $2)", [
    username,
    message,
  ]);
};

export { getMessages, getMessageById, addMessage };
