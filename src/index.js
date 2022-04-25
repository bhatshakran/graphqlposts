import { createServer } from "@graphql-yoga/node";
import db from "./db";
import { typeDef } from "./schema.graphql";
import User from "./resolvers/User";
import Query from "./resolvers/Query";
import Comment from "./resolvers/Comment";
import Post from "./resolvers/Post";

const server = createServer({
  schema: {
    typeDefs: typeDef,
    resolvers: {
      Query,
      User,
      Post,
      Comment,
    },
    context: {
      db,
    },
  },
});
server.start();
