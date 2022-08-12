import ListAccounts from 'components/ListAccounts';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getStateAccounts } from 'redux/accounts/accounts-selectors';
import { accounts } from 'some-serv';
import c from './AsideAccounts.module.scss';

const AsideAccounts = () => {
  const dispatch = useDispatch();
  const accounts = useSelector(getStateAccounts);
  return (
    <div className={c.asideAccounts}>
      {accounts.length !== 0 ? (
        <ListAccounts accounts={accounts} />
      ) : (
        <p className={c.text}>У Вас пока нет активных счетов!</p>
      )}
    </div>
  );
};

export default AsideAccounts;
