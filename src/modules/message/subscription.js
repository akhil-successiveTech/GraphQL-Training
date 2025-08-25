import { pubsub } from "../../server/pubsub.js";
export const subscribeResolver = {
  messageAdded: {
    subscribe: () => pubsub.asyncIterableIterator(["MESSAGE_ADDED"]),
  },
  userAdded: {
    subscribe: () => pubsub.asyncIterator(["USER_ADDED"]),
  },
  userLogged: {
    subscribe: () => pubsub.asyncIterator(["USER_LOGGED"]),
  },
};
