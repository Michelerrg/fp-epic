export default class Post {
    constructor(id, title, content, excerpt, author, categories) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.excerpt = excerpt;
        this.author = author;
        this.categories = categories;
    }
}