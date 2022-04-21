import Category from "../models/Category";

export const getCategory = () => {
    return fetch('http://wordpress.test/wp-json/wp/v2/categories')
    .then(resp => resp.json())
    .then(categories => categories.map(category => new Category(category.id, category.name)));
}

export const categoryObjToModel = category => new Category(category.id, category.name);