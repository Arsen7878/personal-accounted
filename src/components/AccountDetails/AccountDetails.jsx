import AccountInfomation from 'components/AccountInfomation';
import AddAccount from 'components/AddAccount';
import Statistics from 'components/Statistics';
import c from './AccountDetails.module.scss';

const AccountDetails = ({ account }) => {
  console.log(account);
  return (
    <div className={c.accountDetails}>
      {account ? (
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
