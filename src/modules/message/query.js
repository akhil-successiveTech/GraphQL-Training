import { messages } from "./dataSource.js";

export const messageQueryResolvers = {
  messages: async(_, {id}) => {
    let result = messages;
    if (id) {
      result = result.filter(msg => msg.id === id);
    }
    await new Promise(resolve => setTimeout(resolve, 2000));
    return result;
  },
};