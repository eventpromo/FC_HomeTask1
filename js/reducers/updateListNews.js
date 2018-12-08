export default function updateListNews(state, data) {
  return {
    ...state,
    articles: data.articles,
  };
}
