import React from "react";
import { getCategory } from "../../functions/category";
import CategoryList from "../category-list/CategoryList";

export default class Category extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: []
        };
    }

    componentDidMount() {
        getCategory().then(categories => this.setState({ categories }));
    }

    render() {
        const list = this.state.categories.map(category => <CategoryList category={category} key={category.id}/>);
        
        return (
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                { list }
            </ul>
        );
    }
    
}