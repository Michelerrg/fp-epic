import Post from "../models/Post";
import { categoryObjToModel } from "./category";

export const getPost = async (categoryId) => {
    const resp = await fetch(`http://wordpress.test/wp-json/wp/v2/${categoryId ? `posts?categories=${categoryId}` : 'posts'}`);
    const posts = await resp.json();
    
    return posts.map(post => new Post(post.id, post.title.rendered, post.content.rendered, post.excerpt.rendered, post.author, post.categories ? categoryObjToModel(post.categories) : null ));
}