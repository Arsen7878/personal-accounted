export const filterAccount = (accounts, id) => {
  if (accounts.filter(el => el.id === Number(id)).length !== 0) {
    return accounts.filter(el => el.id === Number(id));
  }

  return accounts;
};
