const Query = {
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
};

export { Query as default };
