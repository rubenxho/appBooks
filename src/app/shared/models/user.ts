export class User {
    public email: string;
    public first_name: string;
    public last_name: string;
    public password: string;
    public id_user:number;

    constructor(email:string, first_name: string, last_name: string, password: string){
        this.email= email;
        this.first_name= first_name;
        this.last_name= last_name;
        this.password= password;
        this.id_user;
    }

}
