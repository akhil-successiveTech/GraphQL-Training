# GraphQL Training

## RESTful API's:
Data Fetching: Multiple endpoints for different resources. Ex: /products, /categories.
Query Structure: Fixed responses, controlled by backend.
Versioning: Required new endpoints for changes.
Error formats: HTTP status codes.

## GraphQL API's:
Data Fetching: Single endpoints where the client specifies the exact data structure it needs.
Query Structure: Dynamic responses, controlled by frontend.
Versioning: No versioning: client just requires new fields if needed.
Error formats: Always 200 unless server error, errors sent in errors array in response.

## Overfetching:
Client explicitly requests required fields which reduces the payload size.

## Underfetching:
Client can fetch nested related data in a single request without multiple API calls.

## 1️⃣ Problem: Over-Fetching

### REST Example
http
GET /books/1

{
  "id": 1,
  "title": "1984",
  "author": "George Orwell",
  "published": 1949,
  "genre": "Dystopian",
  "reviews": [
    { "reviewer": "John", "rating": 5, "comment": "Amazing book!" },
    { "reviewer": "Alice", "rating": 4, "comment": "Great read." }
  ],
  "publisher": "Secker & Warburg",
  "ISBN": "123-456-789",
  "pageCount": 328
}

### Issue: If the UI only needs the book title, we still receive all fields, increasing payload size unnecessarily.
### GraphQL Solution

query {
  book(id: 1) {
    title
  }
}
Response:

{
  "data": {
    "book": {
      "title": "1984"
    }
  }
}

## 2. Problem: Under-Fetching
### REST Example
Fetching a book and its reviews:

http

GET /books/1
http

GET /books/1/reviews
Issue: Requires two separate network requests to get all related data.

### GraphQL Solution

query {
  book(id: 1) {
    title
    reviews {
      reviewer
      rating
    }
  }
}
Response:

{
  "data": {
    "book": {
      "title": "1984",
      "reviews": [
        { "reviewer": "John", "rating": 5 },
        { "reviewer": "Alice", "rating": 4 }
      ]
    }
  }
}