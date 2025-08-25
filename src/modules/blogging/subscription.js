import { pubsub } from "../../server/pubsub.js"
export const subscribeResolver = {
    commentAdded: {
        subscribe: () => pubsub.asyncIterableIterator(["COMMENT_ADDED"]),
    },
}