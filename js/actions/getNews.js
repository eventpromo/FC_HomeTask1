import Dispatcher from '../utils/Dispatcher';
import newsService from '../services/QueryNewsService';

export default async function getNews(query) {
  const data = await newsService.read(query);
  new Dispatcher().dispatch('updateListNews', data.articles);
}
