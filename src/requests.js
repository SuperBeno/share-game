const requests = {
  fetchUpcoming: `games?dates=2019-10-10,2020-10-10&ordering=-added`,
  fetchMostPopular: `games?dates=2019-10-10,2020-10-10&ordering=-rating`,
  fetchTopRated: `games`,
  fetchActionMovie: `games?dates=2019-10-10,2020-10-10&ordering=-added`,
  fetchDocumentaries: `games?dates=2019-10-10,2020-10-10&ordering=-added`,
};

export default requests;
