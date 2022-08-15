import { endpoints } from 'routes';

export const getRoute = (route, accounts, activeID) => {
  if (route === endpoints.accounts && accounts.length > 0) {
    if (activeID) {
      return `${route}/${activeID}`;
    } else {
      return `${route}/${accounts[0].id}`;
    }
  }
  return route;
};
