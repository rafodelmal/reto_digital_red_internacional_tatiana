export class Guest {
    id: number;
    username: string;
    password: string;
    constructor(guest){
        this.id=guest.id;
        this.username=guest.username;
        this.password=guest.password;
    }
}