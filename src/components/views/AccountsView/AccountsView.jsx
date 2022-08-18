import AccountDetails from 'components/AccountDetails';
import AsideAccounts from 'components/AsideAccounts';
import { useSelector } from 'react-redux';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { getStateAccounts } from 'redux/accounts/accounts-selectors';
import c from './AccountsView.module.scss';

const AccountsView = () => {
  const accounts = useSelector(getStateAccounts);
  const match = useRouteMatch();
  return (
    <div className={c.blockInf}>
      <AsideAccounts />
      <Switch>
        <Route path={`${match.url}/:id`}>
          <AccountDetails accounts={accounts} />
        </Route>
      </Switch>
    </div>
  );
};

export default AccountsView;
