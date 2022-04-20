import React from "react";
import { getPost } from "../../functions/post";
import PostListRow from "../post-list-row/PostListRow";

export default class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        getPost().then(posts => this.setState({ posts }));
    }

    render() {
        const row = this.state.posts.map(post => <PostListRow post={post} />);
        
        return (
            <div className="container">
                <div className="row d-flex justify-content-evenly">
                    { row }
                </div>
            </div>
        );
    }
    
}