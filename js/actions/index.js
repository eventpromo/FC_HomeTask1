import newsService from '../services/QueryNewsService';
import Dispatcher from '../utils/Dispatcher';
import updateListNews from '../reducers/updateListNews';
import setQuery from '../reducers/setQuery';

export const requestNews = query => ({
  type: 'REQUEST_NEWS',
  data: {
    query,
  },
  reducer: setQuery,
});

export const receiveNews = articles => ({
  type: 'RECEIVE_NEWS',
  data: {
    articles,
  },
  reducer: updateListNews,
});

export const getNews = (query) => {
  new Dispatcher().dispatch(requestNews, query);
  newsService.read(query).then(data => new Dispatcher().dispatch(receiveNews, data.articles));
};
