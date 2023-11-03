const BASE_URL = 'https://rickandmortyapi.com/api/character?page=1';

export const fetchCharacters = (name: string = '') => {
  let url = BASE_URL;
  if (name !== '') {
    url += `&name=${name}`;
  }
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => err.json());
};
