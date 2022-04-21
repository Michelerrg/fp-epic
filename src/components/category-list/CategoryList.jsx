import React from "react";
import { Link } from "react-router-dom";

export default class CategoryList extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <li><Link to={`/categories/${ this.props.category.id }/posts`} className="dropdown-item">{ this.props.category.name }</Link></li>
        );
    }
}