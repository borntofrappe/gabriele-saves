import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Payment implements HasFormatter {
  constructor (readonly recipient: string,
    public amount: number,
    private details?: string
    ) {}

  format(): string {
    return `${this.recipient} is owed ${this.amount}${this.details ? ` for ${this.details}` : ''}`;
  }
}