export const BASE_URL = 'http://127.0.0.1:8000';
const endpoints = {};

export function getURL(BASE_URL, endpoint) {
  return BASE_URL + endpoint;
}

export async function fetchCreator(url = '', options = {}) {
  try {
    const res = await fetch(url, options);
    console.log(res);

    if (res.ok) {
      const data = await res.json();
      console.log(data);

      return data;
    } else {
      console.log('Ошибка сервера');
    }
  } catch (error) {
    console.log(error);
  }
}
