import Page from "../models/Page";


export const getPage = async (pageSlug) => {
    const resp = await fetch(`http://wordpress.test/wp-json/wp/v2/pages/?slug=${pageSlug}`);
    const pages = await resp.json();
    
    return pages.map(page => new Page(page.id, page.title.rendered, page.content.rendered));
}