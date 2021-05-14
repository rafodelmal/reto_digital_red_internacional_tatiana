export class Guest {
    id: number;
    username: string;
    password: string;
    name:   string;
    usercountry:    string;
    usercity: string;
    address: string;
    rol: number;
    constructor(){
       
    }
    login(username: string, password: string){
        
        this.username=username;
        this.password=password;
    }

    create(username: string, password: string, name: string, usercountry: string, usercity: string, address: string, rol: number){
        this.username=username;
        this.password=password;
        this.name=name;
        this.usercountry=usercountry;
        this.usercity=usercity;
        this.address=address;
        this.rol=rol;
    }
}