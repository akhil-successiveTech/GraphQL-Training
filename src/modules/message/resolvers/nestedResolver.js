import { messages } from "../dataSource.js";
import { authors } from "../dataSource.js";

export const messageResolver = {
  Message: {
    author: (parent) => {
      return authors.find((a) => a.id === parent.authorId);
    },
  },
};
