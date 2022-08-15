import ListAccountsItem from 'components/ListAccountsItem';
import c from './ListAccounts.module.scss';
import { Link, useRouteMatch } from 'react-router-dom';

const ListAccounts = ({ accounts }) => {
  const match = useRouteMatch();
  return (
    <ul className={c.list}>
      {accounts.map(({ name, id }) => (
        <li key={id} className={c.item}>
          <Link to={{ pathname: `${match.url}/${id}`, state: { id } }}>
            <ListAccountsItem title={name} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListAccounts;
