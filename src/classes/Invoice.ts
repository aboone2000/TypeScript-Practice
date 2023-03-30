//Classes
export class Invoice {
    static push(invOne: Invoice) {
        throw new Error("Method not implemented.");
    }
   
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ){}
    format(){
        return `${this.client} owes ${this.amount}for ${this.details}`;
    }