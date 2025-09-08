// authors
export let authors = [
  {
    id: "a1",
    name: "System",
    email: "system@example.com",
    password: "hello123"
  },
  {
    id: "a2",
    name: "Admin",
    email: "admin@example.com",
    password: "hello456"
  },
];

// messages
export let messages = [
  {
    id: "1",
    content: "Welcome to the GraphQL API",
    authorID: "a1",
    createdAt: new Date().toISOString(),
    title: "GraphQL API Introduction",
  },
  {
    id: "2",
    content: "You can run queries and mutations now!",
    authorID: "a1",
    createdAt: new Date().toISOString(),
    title: "Query and Mutation Ready",
  },
];
