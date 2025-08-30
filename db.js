import { format } from "date-fns";

const messages = [
  {
    text: "Hello, world!",
    user: "First computer",
    added: format(new Date(), "EEEE MMM d, yyyy h:mm a OOOO"),
    id: crypto.randomUUID(),
  },
  {
    text: "There's a moth in my computer!",
    user: "Harvard",
    added: format(new Date(), "EEEE MMM d, yyyy h:mm a OOOO"),
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
    added: format(new Date(), "EEEE MMM d, yyyy h:mm a OOOO"),
    id: crypto.randomUUID(),
  });
}

export { getMessages, getMessageById, addMessage };
