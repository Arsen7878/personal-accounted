import AccountDetails from 'components/AccountDetails';
import AsideAccounts from 'components/AsideAccounts';
import { account } from 'some-serv';
import c from './AccountsView.module.scss';

const AccountsView = () => {
  return (
    <div className={c.blockInf}>
      <AsideAccounts />
      <AccountDetails account={account} />
    </div>
  );
};

export default AccountsView;
