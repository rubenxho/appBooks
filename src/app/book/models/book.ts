import { Author } from "src/app/shared/models/author";

export class Book {
    public name: string;
    public isbn: string;
    public image: string;
    public author: Author;
    public id_book: number;

    constructor(name:string, isbn:string, image:string, author:Author){
        this.name=name;
        this.isbn=isbn;
        this.image=image;
        this.author= author;
        this.id_book;
    }
}
