import { Prisma } from "prisma-binding";

const prisma = new Prisma({
  typeDefs: "src/generated/schema.graphql",
  endpoint: "http://localhost:4466",
  secret: "moo4ahn3ahb4phein1eingaep",
});


export { prisma as default };



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


// prisma.mutation.updatePost({
//   where:{
//     id:"cl3mzc49l000c0a25m56oxp4b"
//   },
//   data: {
//     title:"Changed title",
//     body: "This is how to get started with GraphqQL",
//     published: true
//   }
// }, '{id}').then((data) => {
//   return prisma.query.posts(null, '{id title body published}')
// }).then((data)=>{
// console.log(data)
// })


// using async await

// const createPostForUser = async(authorId, data) => {
//   const post = await prisma.mutation.createPost({
//     data:{
//       ...data,
//       author:{
//         connect:{
//           id: authorId
//         }
//       }
//     }
//   }, '{id}')

//   const user = await prisma.query.user({
//     where:{
//       id: authorId
//     }
//   }, '{id name email posts {id title published} }')
//   return user
// }


// createPostForUser('cl3mjxa8k001809255uf9jno1', {
//   title:"Great books to read",
//    body:"The art of War",
//    published: true
// }).then((user)=> {
//   console.log(JSON.stringify(user, undefined, 2))
// })


// const updatePostForUser = async(postId, data) => {
//   const post = await prisma.mutation.updatePost({
//     where:{
//       id: postId
//     },
//     data
//   }, '{author {id}}')

//   const user = await prisma.query.user({
//     where:{
//       id: post.author.id
//     }
//   }, '{id name email posts { id title published } }')

//   return user
// }

// prisma.query
//       .users(null, "{id, name, posts{id title}}")
//       .then((data) => {
//         console.log(JSON.stringify(data, undefined, 2));
//       });

// using prisma.exists
// const updatePostForUser = async (postId, data) => {
//   const postExists = await prisma.exists.Post({ id: postId });

//   if (!postExists) {
//     throw new Error("Post does not exist!");
//   }

//   const post = await prisma.mutation.updatePost(
//     {
//       where: {
//         id: postId,
//       },
//       data,
//     },
//     "{author {id name email posts { id title published} } }"
//   );

//   return post.author;
// };




// updatePostForUser('cl3mk5tim007i0925v1dkp1ew', {published: true}).then((user) => {
//   console.log(JSON.stringify(user, undefined, 2))
// }).catch(err => {
//   console.log(err.message)
// })