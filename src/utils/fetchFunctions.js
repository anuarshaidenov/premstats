/* eslint-disable import/prefer-default-export */
export const fetchFromAPI = async (link) => {
  const res = await fetch(link, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
      'x-rapidapi-key': '8a4e1540a9msha3f8fbb81f60c99p1d2f0bjsn953d1dfe8cc9',
    },
  });
  const data = await res.json();
  return data;
};
