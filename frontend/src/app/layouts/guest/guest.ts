export class Guest {
    id: number;
    username: string;
    password: string;
    constructor(){
       
    }
    login(username: string, password: string){
        
        this.username=username;
        this.password=password;
    }
}