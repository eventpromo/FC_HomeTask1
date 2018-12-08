export default function setQuery(state, data) {
  return {
    ...state,
    query: data.query,
  };
}
