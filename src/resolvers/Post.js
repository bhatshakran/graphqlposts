const Post = {
  author(parent, args, ctx, info) {
    return users.find((user) => user.id === parent.author);
  },
  comments(parent, args, ctx, info) {
    return comments.filter((comment) => comment.post === parent.id);
  },
};

export { Post as default };
