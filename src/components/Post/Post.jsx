import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../functions/post";
import PostListRow from "../post-list-row/PostListRow";

export default function Post() {
    const [posts, setPosts] = useState([]);
    const { categoryId } = useParams();
  
    useEffect(() => {
        getPost(categoryId).then(posts => {
            setPosts(posts);
        });
    }, [categoryId]);

    return (
        <div className="container">
            <div>
                <h1 className="p-5 panel">Homepage del <span className="text-warning fw-bold">blog interessante</span></h1>
            </div>
            <div className="row d-flex justify-content-evenly">
                { posts.map(post => <PostListRow post={post}  key={post.id}/>) }
            </div>
        </div>
    );
    
}