import { Author } from "./author";

export class AuthorJson {
    public error: string;
    public found: boolean;
    public created: boolean;
    public updated: boolean;
    public data: Author[];

    constructor(error:string, found: boolean, created: boolean, updated: boolean){
        this.error= error;
        this.found= found;
        this.created= created;
        this.updated= updated;
    }
}
