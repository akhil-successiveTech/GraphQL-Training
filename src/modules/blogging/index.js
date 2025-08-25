import { blogMutationResolvers } from "./mutation.js";
import { blogQueryResolvers } from "./query.js";
import { subscribeResolver } from "./subscription.js";

// All resolvers are called in this file
export const bloggingModule = {
    Query:blogQueryResolvers,
    Mutation:blogMutationResolvers,
    Subscription:subscribeResolver
}