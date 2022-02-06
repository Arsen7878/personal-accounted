import ListAccountsItem from 'components/ListAccountsItem';
import c from './ListAccounts.module.scss';

const ListAccounts = ({ accounts }) => {
  return (
    <ul className={c.list}>
      {accounts.map(({ title, id }) => (
        <li key={id} className={c.item}>
          <ListAccountsItem title={title} />
        </li>
      ))}
    </ul>
  );
};

export default ListAccounts;
