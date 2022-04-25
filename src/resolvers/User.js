const User = {
  posts(parent, args, ctx, info) {
    return posts.filter((post) => post.author === parent.id);
  },
  comments(parent, args, ctx, info) {
    return comments.filter((comment) => comment.author === parent.id);
  },
};

export { User as default };
