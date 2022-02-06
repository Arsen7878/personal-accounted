import { fetchCreator, BASE_URL, getURL } from 'services/base';
import { endpoints } from './endpoins';

export async function fetchNav() {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetchCreator(getURL(BASE_URL, endpoints.nav), options);
}
