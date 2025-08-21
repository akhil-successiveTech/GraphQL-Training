import { messageMutationResolvers } from "./mutation.js";
import { messageQueryResolvers } from "./query.js";

// All resolvers are called in this file
export const messageModule ={
    Query:messageQueryResolvers,
    Mutation:messageMutationResolvers
}