import { createApolloServer } from "./src/server/express.js";
import { connectDB } from "./src/db/db.js";

await connectDB();
console.log("Database connection estabilished");
const httpServer = await createApolloServer(4000);

httpServer.listen(4001, () => {
  console.log(`Query/Mutation endpoint: http://localhost:4000/graphql`);
  console.log(`Subscription endpoint: ws://localhost:4000/graphql`);
});