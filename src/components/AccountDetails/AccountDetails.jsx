import AccountInfomation from 'components/AccountInfomation';
import AddAccount from 'components/AddAccount';
import Statistics from 'components/Statistics';
import { useHistory } from 'react-router-dom';
import c from './AccountDetails.module.scss';

const AccountDetails = ({ account }) => {
  const history = useHistory();
  const id = history?.location?.state?.path || 1;
  const filterAccount = account.filter(el => el.id === id);
  return (
    <div className={c.accountDetails}>
      {account ? (
        <>
          <AccountInfomation account={filterAccount} />
          <Statistics />
        </>
      ) : (
        <AddAccount />
      )}
    </div>
  );
};

export default AccountDetails;
