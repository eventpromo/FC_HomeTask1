import Store from '../utils/Store';

export default async function updateListNews(articles) {
  new Store().setState({
    articles,
  });
}
