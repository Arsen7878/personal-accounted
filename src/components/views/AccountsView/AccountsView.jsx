import AccountDetails from 'components/AccountDetails';
import AsideAccounts from 'components/AsideAccounts';
import { useHistory } from 'react-router-dom';
import { account } from 'some-serv';
import c from './AccountsView.module.scss';

const AccountsView = () => {
  const history = useHistory();
  console.log(account);

  const index = history?.location?.state?.path || 0;
  console.log(index);
  return (
    <div className={c.blockInf}>
      <AsideAccounts />
      <AccountDetails account={account[index - 1]} />
    </div>
  );
};

export default AccountsView;
