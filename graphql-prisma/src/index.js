import { createServer, createPubSub } from "@graphql-yoga/node";
import db from "./db";
import { typeDef } from "./schema.graphql";
import User from "./resolvers/User";
import Query from "./resolvers/Query";
import Comment from "./resolvers/Comment";
import Post from "./resolvers/Post";
import Mutation from "./resolvers/Mutation";
import Subscription from "./resolvers/Subscription";
import prisma from "./prisma";

const pubSub = createPubSub();

const server = createServer({
  schema: {
    typeDefs: typeDef,
    resolvers: {
      Query,
      Mutation,
      Subscription,
      User,
      Post,
      Comment,
    },
  },
  context: (initialContext) => {
    const authHeader = initialContext.request.headers.get("authorization");

    return { db, authHeader, pubSub, prisma };
  },
});
server.start();
