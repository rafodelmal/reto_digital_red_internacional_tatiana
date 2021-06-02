export class House {
    idhouse: number;
    username: string;
    phone: number;
    housecountry:    string;
    housecity: string;
    houseaddress: string;
    available: number;
    photo: string;
    constructor(){
       
    }

    login(username: string){
        
        this.username=username;
        
    }
    

    create(username: string, phone: number, housecountry: string, housecity: string, houseaddress: string, available: number, photo: string){
        this.username=username;
        this.phone=phone;
        this.housecountry=housecountry;
        this.housecity=housecity;
        this.houseaddress=houseaddress;
        this.available=available;
        this.photo=photo;
    }
}