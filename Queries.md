# Queries

## Simple Queries for specific fields
query Query {
  messages {
    id
    content
    createdAt
  }
}

## Queries for nested objects
query Query {
  messages {
    id
    content
    author {
      id
      name
    }
  }
}

## Queries with arguments
query Query($messagesId: ID) {
  messages(id: $messagesId) {
    id
    content
    createdAt
  }
}
## Variables
{
  "messagesId": "1"
}