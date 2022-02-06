import ListAccounts from 'components/ListAccounts';
import { accounts } from 'some-serv';
import c from './AsideAccounts.module.scss';

const AsideAccounts = () => {
  return (
    <div className={c.asideAccounts}>
      {accounts.length !== 0 ? (
        <ListAccounts accounts={accounts} />
      ) : (
        <p className={c.text}>У Вас пока нет активных счетов!</p>
      )}
    </div>
  );
};

export default AsideAccounts;
