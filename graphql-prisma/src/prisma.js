import { Prisma } from "prisma-binding";

const prisma = new Prisma({
  typeDefs: "src/generated/schema.graphql",
  endpoint: "http://localhost:4466",
});



// prisma.query.comments(null, "{text, author{id name}}").then((data) => {
//   console.log(JSON.stringify(data, undefined, 2));
// });


// prisma.mutation
//   .createPost(
//     {
//       data: {
//         title: "GraphQL 101",
//         body: " Post from the code",
//         published: false,
//         author: {
//           connect: {
//             id: "cl3mjxa8k001809255uf9jno1",
//           },
//         },
//       },
//     },
//     "{id title body published }"
//   )
//   .then((data) => {
//     console.log(data);
//     return prisma.query
//       .users(null, "{id, name, posts{id title}}")
//       .then((data) => {
//         console.log(JSON.stringify(data, undefined, 2));
//       });
//   })
//   .then((data) => {
//     console.log(JSON.stringify(data, undefined, 2));
//   });


prisma.mutation.updatePost({
  where:{
    id:"cl3mzc49l000c0a25m56oxp4b"
  },
  data: {
    title:"Changed title",
    body: "This is how to get started with GraphqQL",
    published: true
  }
}, '{id}').then((data) => {
  return prisma.query.posts(null, '{id title body published}')
}).then((data)=>{
console.log(data)
})