export const fetchFromAPI = async (link) => {
  const res = await fetch(link, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': process.env.REACT_APP_API_KEY,
    },
  });
  const data = await res.json();
  return data;
};
