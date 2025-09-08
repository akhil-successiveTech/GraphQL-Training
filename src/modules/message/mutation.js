import { messages } from "./dataSource.js";
import { authors } from "./dataSource.js";
import bcrypt from "bcrypt";
import { pubsub } from "../../server/pubsub.js";

export const messageMutationResolvers = {
  postMessage: (_, { content, author, title }, { pubsub }) => {
    const newMessage = {
      id: String(messages.length + 1),
      content,
      author,
      title,
      createdAt: new Date().toISOString(),
    };
    messages.push(newMessage);
    pubsub.publish("MESSAGE_ADDED", { messageAdded: newMessage });
    return newMessage;
  },

  registerUser: async (_, { name, email, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      id: String(authors.length + 1),
      name,
      email,
      password: hashedPassword,
    };
    authors.push(newUser);
    pubsub.publish("USER_ADDED", { userAdded: newUser });
    return newUser;
  },

  loginUser: async (_, { email, password }) => {
    const user = authors.find((u) => u.email === email);
    if (!user) throw new Error("User not found");
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error("Invalid password");
    const token = jwt.sign({ userId: user.id }, "SECRET_KEY", {
      expiresIn: "1h",
    });
    pubsub.publish("USER_LOGGEDIN", { userLogged: token });
    return { ...user, token };
  },
};
