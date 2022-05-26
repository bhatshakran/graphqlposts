import { Prisma } from "prisma-binding";

const prisma = new Prisma({
  typeDefs: "src/generated/schema.graphql",
  endpoint: "http://localhost:4466",
});

prisma.query.users(null, "{id, name, posts{id title}}").then((data) => {
  console.log(JSON.stringify(data, undefined, 2));
});