export class Invoice {
    constructor(client, amount, details) {
        this.client = client;
        this.amount = amount;
        this.details = details;
    }
    format() {
        return `${this.client} ows ${this.amount}${this.details ? ` for ${this.details}` : ''}`;
    }
}
