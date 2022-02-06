import AccountItem from 'components/NavBarItem';
import c from './NavBarList.module.scss';

const NavBarList = ({ navLink }) => {
  return (
    <ul className={c.list}>
      {navLink.map(({ title, id }) => (
        <li key={id} className={c.item}>
          <AccountItem title={title} />
        </li>
      ))}
    </ul>
  );
};

export default NavBarList;
