import { comments, posts, users } from "./dataSource.js";

export const blogQueryResolvers = {
  users: async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return users;
  },
  user: (_, { id }) => users.find((user) => user.id === id),

  posts: async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return posts;
  },
  post: (_, { id }) => posts.find((post) => post.id === id),

  comments: async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return comments;
  },
  comment: (_, { id }) => comments.find((comment) => comment.id === id),

  paginatedPosts: async (_, { page, limit, sortBy, order }) => {
    const simulateDelay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await simulateDelay(1200);
    let sortedPosts = [...posts];

    // Apply sorting if requested
    if (sortBy) {
      sortedPosts.sort((a, b) => {
        let fieldA = a[sortBy];
        let fieldB = b[sortBy];

        if (typeof fieldA === "string") fieldA = fieldA.toLowerCase();
        if (typeof fieldB === "string") fieldB = fieldB.toLowerCase();

        if (fieldA < fieldB) return order === "desc" ? 1 : -1;
        if (fieldA > fieldB) return order === "desc" ? -1 : 1;
        return 0;
      });
    }

    const totalPosts = sortedPosts.length;
    const totalPages = Math.ceil(totalPosts / limit);

    if (page < 1 || page > totalPages) {
      throw new Error("Invalid page number");
    }

    const start = (page - 1) * limit;
    const end = start + limit;

    return {
      posts: sortedPosts.slice(start, end),
      totalPosts,
      totalPages,
      currentPage: page,
    };
  },
};
