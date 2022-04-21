import React from "react";

export default class PostListRow extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div className="card col-lg-3 m-2 rounded">
            <div className="card-title">
                <p className="fs-5 fw-bold">{ this.props.post.title }</p>
            </div>
            <div className="card-body">	
                <div className="card-text">
                    <p dangerouslySetInnerHTML={{ __html: this.props.post.excerpt }}></p>
                </div>
            </div>
        </div>  
        );
    }
}