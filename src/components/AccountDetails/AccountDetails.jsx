import AccountInformation from 'components/AccountInformation';
import AddAccount from 'components/AddAccount';
import Statistics from 'components/Statistics';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { stateActiveID } from 'redux/accounts/accounts-operations';
import { filterAccount } from 'utils/filterAccounts';
import c from './AccountDetails.module.scss';

const AccountDetails = ({ accounts }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(stateActiveID(id));
  }, [dispatch, id]);

  return (
    <div className={c.accountDetails}>
      {accounts.length !== 0 ? (
        <>
          <AccountInformation account={filterAccount(accounts, id)} />
          <Statistics transaction={filterAccount(accounts, id)} />
        </>
      ) : (
        <AddAccount />
      )}
    </div>
  );
};

export default AccountDetails;
