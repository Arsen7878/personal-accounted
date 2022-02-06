import ListOfAccounts from 'components/NavBarList';
import c from './NavBarMainPage.module.scss';
import { navItems } from 'some-serv';

const NavBarMainPage = () => {
  return (
    <div className={c.listBox}>
      <ListOfAccounts navLink={navItems} />
    </div>
  );
};

export default NavBarMainPage;
