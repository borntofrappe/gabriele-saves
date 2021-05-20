import { HasFormatter } from "../interfaces/HasFormatter";

export class ArticleTemplate {
  constructor(private container: HTMLElement) {}

  render(item: HasFormatter, heading: string) {
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    h2.textContent = heading;

    article.append(h2);

    const p = document.createElement('p');
    p.textContent = item.format();
    
    article.append(p);
    this.container.append(article);
  }
}