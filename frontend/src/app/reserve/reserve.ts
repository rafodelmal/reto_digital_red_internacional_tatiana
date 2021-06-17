export class Reserve {  
    idreserve: number; 
    idhouse: number;
    usernameguest: string;
    usernamehost: string;
    fechainit: string;
    fechaend: string;

    constructor(){
       
    }


    createReserve(idhouse: number, usernameguest: string, usernamehost: string, fechainit: string, fechaend: string){
        this.idhouse=idhouse;
        this.usernameguest=usernameguest;
        this.usernamehost=usernamehost;
        this.fechainit=fechainit;
        this.fechaend=fechaend;
        
    }

}   