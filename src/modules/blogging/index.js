import { blogMutationResolvers } from "./mutation.js";
import { blogQueryResolvers } from "./query.js";

// All resolvers are called in this file
export const bloggingModule = {
    Query:blogQueryResolvers,
    Mutation:blogMutationResolvers
}