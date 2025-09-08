import { messageMutationResolvers } from "./mutation.js";
import { messageQueryResolvers } from "./query.js";

// these are resolvers
export const messageModule ={
    Query:messageQueryResolvers,
    Mutation:messageMutationResolvers
}