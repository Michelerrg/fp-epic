import Post from "../models/Post";

export const getPost = async () => {
    const resp = await fetch('http://wordpress.test/wp-json/wp/v2/posts');
    const posts = await resp.json();
    
    return posts.map(post => new Post(post.id, post.title.rendered, post.content.rendered, post.excerpt.rendered, post.author, post.categories));
}