const posts = [
    {title: 'hello', post: 'my'}, 
    {title: 'name', post: 'is'}, 
    {title: 'max', post: 'BB'}
]


// for (let i = 0; i < posts.length; i++){
//     console.log(posts[i].title);
// }

posts.forEach(post => {
    console.log(post.title);
})