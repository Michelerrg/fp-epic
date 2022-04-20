import React from "react";

export default class PostListRow extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div className="card col-lg-3 my-2 border-0">
            <div className="card-title">
                <p className="fs-5 fw-bold">{ this.props.post.title }</p>
            </div>
            <div className="card-body">	
                <div className="card-text">
                    <p dangerouslySetInnerHTML={{ __html: this.props.post.excerpt }}></p>
                </div>
            </div>
            <div className="card-footer text-end">
                <a className="btn btn-warning" href="#">Leggi</a>
            </div>
        </div>  
        );
    }
}