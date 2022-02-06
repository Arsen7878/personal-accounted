import AccountItem from 'components/NavBarItem';
import c from './NavBarList.module.scss';
import { Link, NavLink, Router } from 'react-router-dom';

const NavBarList = ({ navLink }) => {
  return (
    <ul className={c.list}>
      {navLink.map(({ title, id, route }) => (
        <li className={c.item} key={id}>
          <NavLink to={route}>
            <AccountItem title={title} />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavBarList;
