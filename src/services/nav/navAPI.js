import { fetchCreator, BASE_URL, getURL } from 'services/base';
import { endpoints } from './endpoins';
export async function fetchNav() {
  return fetchCreator(getURL(BASE_URL, endpoints.nav));
}
