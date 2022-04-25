import { v4 as uuidv4 } from "uuid";

const Mutation = {
  createUser(parent, args, { db }, info) {
    const emailTaken = db.users.some((user) => user.email === args.data.email);

    if (emailTaken) {
      throw new Error("Email Taken");
    }

    const user = {
      id: uuidv4(),
      ...args.data,
    };

    db.users.push(user);

    return user;
  },

  createPost(parent, args, { db }, info) {
    const userExists = db.users.some((user) => user.id === args.data.author);

    if (!userExists) {
      throw new Error("User not found");
    }

    const post = {
      id: uuidv4(),
      ...args.data,
    };

    db.posts.push(post);
    return post;
  },
  createComment(parent, args, { db }, info) {
    const postExists = db.posts.some((post) => post.id === args.data.post);

    if (!postExists) {
      throw new Error("Post does not exist");
    }

    const comment = {
      ...args.data,
    };

    db.comments.push(comment);

    return comment;
  },
};

export { Mutation as default };
