import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Invoice implements HasFormatter {
  constructor (readonly client: string,
    public amount: number,
    private details?: string
    ) {}

  format(): string {
    return `${this.client} ows ${this.amount}${this.details ? ` for ${this.details}` : ''}`;
  }
}