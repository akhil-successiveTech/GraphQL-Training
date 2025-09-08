import { users } from "../dataSource.js";

export const postResolver = {
    author: (parent) => users.find(u => u.id === parent.authorID)
}