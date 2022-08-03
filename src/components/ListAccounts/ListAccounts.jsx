import ListAccountsItem from 'components/ListAccountsItem';
import c from './ListAccounts.module.scss';
import { endpoints } from 'routes';
import { Link } from 'react-router-dom';

const ListAccounts = ({ accounts }) => {
  return (
    <ul className={c.list}>
      {accounts.map(({ title, id }) => (
        <li key={id} className={c.item}>
          <Link
            to={{
              pathname: `${endpoints.accounts}/${id}`,
              state: { path: id },
            }}
          >
            <ListAccountsItem title={title} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListAccounts;
