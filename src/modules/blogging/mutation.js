import { comments, posts, users, } from "./dataSource.js";

export const blogMutationResolvers = {
  // Update the user details
  updateUser: (_, { id, name, email }) => {
    // Finds the user with id
    const user = users.find((u) => u.id === id);
    if (!user) return null;
    // Update values in the user
    if (name !== undefined) user.name = name;
    if (email !== undefined) user.email = email;
    return user;
  },

  // Create comment
  createComment: (_, { content, authorID, postID }) => {

    const user = users.find((u) => u.id === String(authorID));
    if (!user) return ("Author not found");
    const post = posts.find((p) => p.id === String(postID));
    if (!post) return ("Post not found");
    // Create a new comment
    const newComment = {
      id: String(comments.length + 1),
      content,
      authorID, 
      postID,
    };
    // Push it into comments array
    comments.push(newComment);
    return newComment;
  },

  // Delete comment
  deleteComment: (_, { id }) => {
    // Find using id
    const index = comments.findIndex((c) => c.id === id);
    if (index === -1) return false;
    // Deletes 1 element from the index
    comments.splice(index, 1);
    return true;
  },

  // Create a post
  createPost: async (_, { title, content, authorID }) => {
    // Adds a pause of 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // Create a newPost object
    const newPost = {
      id: String(posts.length + 1),
      title,
      content,
      authorID,
    };
    // Push it into array
    posts.push(newPost);
    return newPost;
  },
};
