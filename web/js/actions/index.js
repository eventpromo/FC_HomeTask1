import newsService from '../services/QueryNewsService';
import Dispatcher from '../utils/Dispatcher';

export const requestNews = query => ({
  query,
});

export const receiveNews = articles => ({
  articles,
});

export const getNews = (query) => {
  new Dispatcher().dispatch(requestNews, query);
  newsService.read(query).then(data => new Dispatcher().dispatch(receiveNews, data.articles));
};
