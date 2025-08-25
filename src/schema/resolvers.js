import { messageModule } from "../modules/message/index.js";
import { bloggingModule } from "../modules/blogging/index.js";
import { postResolver } from "../modules/blogging/resolvers/postResolver.js";
import { commentResolver} from "../modules/blogging/resolvers/commentResolver.js";
import { chatModule } from "../modules/chat/index.js";

// All resolvers are used from this file
export const resolvers={
    Query:{
        ...messageModule.Query,
        ...bloggingModule.Query,
        ...chatModule.Query

    },
    Mutation:{
        ...messageModule.Mutation,
        ...bloggingModule.Mutation,
        ...chatModule.Mutation
    },
    Post: postResolver,
    Comment : commentResolver,
    Subscription: {
        ...messageModule.Subscription,
        ...bloggingModule.Subscription,
        ...chatModule.Subscription
    },
};