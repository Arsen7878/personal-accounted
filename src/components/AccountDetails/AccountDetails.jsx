import AccountInfomation from 'components/AccountInfomation';
import { account } from 'some-serv';
import c from './AccountDetails.module.scss';

const AccountDetails = () => {
  return (
    <div className={c.accountDetails}>
      <AccountInfomation account={account} />
    </div>
  );
};

export default AccountDetails;
