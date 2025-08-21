export let users = [
  { 
    id: "1", 
    name: "Akhil Dhawan", 
    email: "akhil@example.com" 
  },
  { 
    id: "2", 
    name: "Riya Sharma", 
    email: "riya@example.com" 
  },
  { 
    id: "3", 
    name: "Arjun Mehta", 
    email: "arjun@example.com" 
  }
]

export const posts = [
  {
    id: '101',
    title: 'GraphQL Basics',
    content: 'This post explains the basics of GraphQL.',
    authorID: '1'
  },
  {
    id: '102',
    title: 'Advanced GraphQL',
    content: "Let's dive deeper into GraphQL features.",
    authorID: '2'
  }
];

export const comments = [
  {
    id: "1",
    content: "This is the first comment",
    authorID: "1",
    postID: "101"
  },
  {
    id: "2",
    content: "Great post! Thanks for sharing",
    authorID: "2",
    postID: "102"
  },
  {
    id: "3",
    content: "I totally agree with your point",
    authorID: "3",
    postID: "101"
  }
];