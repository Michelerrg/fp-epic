import React from "react";

export default class CategoryList extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <li><a className="dropdown-item">{ this.props.category.name }</a></li>
        );
    }
}