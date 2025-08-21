import { posts, users } from "../dataSource.js";

export const commentResolver = {
    post: (parent) => posts.find(p => p.id === parent.postID),
    author: (parent) => users.find(u => u.id === parent.authorID)
};