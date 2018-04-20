export class Quote {
    public showDetails:boolean;
    constructor(public quote:string, public author:string,public user:string){
        this.showDetails=false;
    }
}
