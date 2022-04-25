const Comment = {
  author(parent, args, ctx, info) {
    return users.find((user) => user.id === parent.author);
  },
  post(parent, args, ctx, info) {
    return posts.find((post) => post.id === parent.post);
  },
};

export { Comment as default };
