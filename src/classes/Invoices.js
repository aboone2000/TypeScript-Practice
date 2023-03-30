"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
//Classes
class Invoice {
    static push(invOne) {
        throw new Error("Method not implemented.");
    }
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount}for ${this.details}`;
    }
}
exports.Invoice = Invoice;
