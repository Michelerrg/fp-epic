import React from "react";

export default class PageWrite extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div className="panel">
                <h2 dangerouslySetInnerHTML={ { __html: this.props.page.title }}></h2>
                <p className="fw-bold" dangerouslySetInnerHTML={{ __html: this.props.page.content }}></p>
            </div> 
        );
    }
}