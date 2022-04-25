import { createServer } from "@graphql-yoga/node";
import { users, posts, comments } from "./db";

// type definitions (schema)

const typeDefs = `
    type Query {
        users(query: String): [User!]!
        posts(query: String): [Post!]!
        comments: [Comment!]!
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
        comments: [Comment!]!
    }


    type Comment {
        id: ID!
        text: String!
        author: User!
        post: Post!
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

    comments(parent, args, ctx, info) {
      return comments;
    },
  },
  Post: {
    author(parent, args, ctx, info) {
      return users.find((user) => user.id === parent.author);
    },
    comments(parent, args, ctx, info) {
      return comments.filter((comment) => comment.post === parent.id);
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
