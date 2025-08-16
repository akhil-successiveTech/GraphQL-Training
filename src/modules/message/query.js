import { messages } from "./dataSource.js";

export const messageQueryResolvers = {
  messages: (_, {id}) => {
    let result = messages;
    if (id) {
      result = result.filter(msg => msg.id === id);
    }
    return result;
  },
};