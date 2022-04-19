import { Book } from "./book";

export class BookJson {
    public error: string;
    public found: boolean;
    public created: boolean;
    public updated: boolean;
    public data: Book[];

    constructor(error:string, found: boolean, created: boolean, updated: boolean){
        this.error= error;
        this.found= found;
        this.created= created;
        this.updated= updated;
        this.data;
    }
}
