import { Payment } from './classes/Payment.js';
import { Invoice } from './classes/Invoice.js';
import { ArticleTemplate } from './classes/ArticleTemplate.js';
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const type = form.querySelector('#type');
    const name = form.querySelector('#name');
    const amount = form.querySelector('#amount');
    const details = form.querySelector('#details');
    const main = document.querySelector('main');
    const articles = new ArticleTemplate(main);
    let doc;
    if (type.value === 'payment') {
        doc = new Payment(name.value, amount.valueAsNumber, details.value);
    }
    else {
        doc = new Invoice(name.value, amount.valueAsNumber, details.value);
    }
    articles.render(doc, type.value);
});
