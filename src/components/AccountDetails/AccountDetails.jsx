import AccountInfomation from 'components/AccountInfomation';
import AddAccount from 'components/AddAccount';
import Statistics from 'components/Statistics';
import { account } from 'some-serv';
import { useHistory } from 'react-router-dom';
import c from './AccountDetails.module.scss';

const AccountDetails = () => {
  const history = useHistory();
  return (
    <div className={c.accountDetails}>
      {account ? (
        <>
          {account.map(acc =>
            acc.id === history.location.state.path ? (
              <AccountInfomation account={acc} key={acc.id} />
            ) : null,
          )}
          <Statistics />
        </>
      ) : (
        <AddAccount />
      )}
    </div>
  );
};

export default AccountDetails;
