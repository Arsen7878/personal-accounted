import AccountDetails from 'components/AccountDetails';
import AsideAccounts from 'components/AsideAccounts';
import c from './AccountsView.module.scss';
const AccountsView = () => {
  return (
    <div className={c.blockInf}>
      <AsideAccounts />
      <AccountDetails />
    </div>
  );
};

export default AccountsView;
