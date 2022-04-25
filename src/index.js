import { createServer } from "@graphql-yoga/node";
import { users, posts, comments } from "./db";

// type definitions (schema)

const typeDefs = `
    type Query {
        users(query: String): [User!]!
        posts(query: String): [Post!]!
    }


    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }


    type Post {
        id: ID!
        title: String!
        body: String!
        author: User!
        published: Boolean!
    }
`;

// resolvers

const resolvers = {
  Query: {
    users(parent, args, ctx, info) {
      if (!args.query) {
        return users;
      }
      return users.filter((user) =>
        user.name.toLowerCase().includes(args.query.toLowerCase())
      );
    },

    posts(parent, args, ctx, info) {
      if (!args.query) {
        return posts;
      }

      return posts.filter((post) => {
        const isTitleMatch = post.title
          .toLowerCase()
          .includes(args.query.toLowerCase());
        const isBodyMatch = post.body
          .toLowerCase()
          .includes(args.query.toLowerCase());

        return isTitleMatch || isBodyMatch;
      });
    },
  },
};

const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
});
server.start();
