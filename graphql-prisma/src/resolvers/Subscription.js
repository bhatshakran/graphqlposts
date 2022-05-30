const Subscription = {
  count: {
    subscribe: (parent, args, { pubSub }, info) => {
      let count = 0;

      setInterval(() => {
        count++;
        pubSub.publish("count", { count });
      }, 10000);

      return pubSub.subscribe("count");
    },
  },
  comment: {
    subscribe: (parent, { postId }, { pubSub }, info) =>
      pubSub.subscribe(`comment ${postId}`),
    resolve: (payload) => payload,
  },
};

export { Subscription as default };
