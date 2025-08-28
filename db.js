const messages = [
  {
    text: "Hello, world!",
    user: "First computer",
    added: new Date(),
    id: crypto.randomUUID(),
  },
  {
    text: "There's a moth in my computer!",
    user: "Harvard",
    added: new Date(),
    id: crypto.randomUUID(),
  },
];

// emulate a database (asynchronous)

async function getMessages() {
  return messages;
}

async function getMessageById(messageId) {
  return messages.find((message) => message.id === messageId);
}

async function addMessage(name, message) {
  return messages.push({
    text: message,
    user: name,
    added: new Date(),
    id: crypto.randomUUID(),
  });
}

export { getMessages, getMessageById, addMessage };
