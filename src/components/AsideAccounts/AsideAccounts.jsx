import ListAccounts from 'components/ListAccounts';
import { accounts } from 'some-serv';
import c from './AsideAccounts.module.scss';

const AsideAccounts = () => {
  return (
    <div className={c.asideAccounts}>
      <ListAccounts accounts={accounts} />
    </div>
  );
};

export default AsideAccounts;
