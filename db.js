// change to localStorage later when the project requirements are met!
const messages = [
  {
    text: "Hello, world!",
    user: "First computer",
    added: new Date(),
    id: 1,
  },
  {
    text: "There's a moth in my computer!",
    user: "Harvard",
    added: new Date(),
    id: 2,
  },
];

async function getMessageById(messageId) {
  return messages.find((message) => message.id === messageId);
}

export { messages, getMessageById };
