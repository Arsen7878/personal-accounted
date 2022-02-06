import ListOfAccounts from 'components/NavBarList';
import c from './NavBarMainPage.module.scss';
import { navItems } from 'some-serv';
import { useEffect } from 'react';
import { fetchNav } from 'services/nav/navAPI';

const NavBarMainPage = () => {
  const a = fetchNav();
  console.log(a);

  return (
    <div className={c.listBox}>
      <ListOfAccounts navLink={navItems} />
    </div>
  );
};

export default NavBarMainPage;
