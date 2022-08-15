import AccountItem from 'components/NavBarItem';
import c from './NavBarList.module.scss';
import { getRoute } from 'components/utils/getRoute';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  getActiveAccountID,
  getStateAccounts,
} from 'redux/accounts/accounts-selectors';
import { endpoints } from 'routes';

const NavBarList = ({ navLink }) => {
  const accounts = useSelector(getStateAccounts);
  const activeId = useSelector(getActiveAccountID);

  return (
    <ul className={c.list}>
      {navLink.map(({ title, id, route }) => (
        <li className={c.item} key={id}>
          <NavLink to={getRoute(route, accounts, activeId)}>
            <AccountItem title={title} />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavBarList;
