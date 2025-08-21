import { messageModule } from "../modules/message/index.js";
import { bloggingModule } from "../modules/blogging/index.js";
import { postResolver } from "../modules/blogging/resolvers/postResolver.js";
import { commentResolver} from "../modules/blogging/resolvers/commentResolver.js";

// All resolvers are used from this file
export const resolvers={
    Query:{
        ...messageModule.Query,
        ...bloggingModule.Query

    },
    Mutation:{
        ...messageModule.Mutation,
        ...bloggingModule.Mutation
    },
    Post: postResolver,
    Comment : commentResolver
};