import c from './NavBarItem.module.scss';

const NavBarItem = ({ title }) => {
  return (
    <>
      <h2 className={c.title}>{title}</h2>
    </>
  );
};

export default NavBarItem;
