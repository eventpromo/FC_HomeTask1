class NewsItem extends HTMLElement {
  constructor({ title, description, urlToImage }) {
    super();

    this.className = 'news-list__item news-item';

    const elem = document.createElement('div');
    elem.className = 'news-list__item news-item';

    const titleElement = document.createElement('div');
    titleElement.className = 'news-item__title';
    titleElement.innerHTML = title;

    const imgElement = document.createElement('div');
    imgElement.className = 'news-item__img';
    imgElement.style.backgroundImage = `url('${urlToImage}')`;

    const bodyElement = document.createElement('div');
    bodyElement.className = 'news-item__body';
    bodyElement.innerHTML = description;

    this.appendChild(titleElement);
    this.appendChild(imgElement);
    this.appendChild(bodyElement);
  }
}

export default NewsItem;
