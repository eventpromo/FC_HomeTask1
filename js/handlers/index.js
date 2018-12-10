export function setQuery(state, data) {
  return {
    ...state,
    query: data.query,
  };
}

export function updateListNews(state, data) {
  return {
    ...state,
    articles: data.articles,
  };
}
