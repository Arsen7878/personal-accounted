import AccountInfomation from 'components/AccountInfomation';
import AddAccount from 'components/AddAccount';
import Statistics from 'components/Statistics';
import { account } from 'some-serv';
import c from './AccountDetails.module.scss';

const AccountDetails = () => {
  return (
    <div className={c.accountDetails}>
      {account?.name ? (
        <>
          <AccountInfomation account={account} />
          <Statistics />
        </>
      ) : (
        <AddAccount />
      )}
    </div>
  );
};

export default AccountDetails;
