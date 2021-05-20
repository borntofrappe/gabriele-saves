import { Payment } from './classes/Payment.js';
import { Invoice } from './classes/Invoice.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ArticleTemplate } from './classes/ArticleTemplate.js';

const form = document.querySelector('form')!;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  const type = form.querySelector('#type') as HTMLSelectElement;
  const name = form.querySelector('#name') as HTMLInputElement;
  const amount = form.querySelector('#amount') as HTMLInputElement;
  const details = form.querySelector('#details') as HTMLInputElement;

  const main = document.querySelector('main')!;
  const articles = new ArticleTemplate(main);

  let doc: HasFormatter;
  if(type.value === 'payment') {
    doc = new Payment(name.value, amount.valueAsNumber, details.value);
  } else {
    doc = new Invoice(name.value, amount.valueAsNumber, details.value);
  }

  articles.render(doc, type.value);
});
