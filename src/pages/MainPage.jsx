import NavBarMainPage from 'components/NavBarMainPage';
import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { endpoints } from 'routes';

const AccountsView = lazy(() =>
  import(
    '../components/views/AccountsView' /* webpackChunkName: "accounts-page"*/
  ),
);
const IncomeView = lazy(() =>
  import('../components/views/IncomeView' /* webpackChunkName: "income-page"*/),
);
const ExpenceView = lazy(() =>
  import(
    '../components/views/ExpenceView' /* webpackChunkName: "expence-page"*/
  ),
);
const StatisticsView = lazy(() =>
  import(
    '../components/views/StatisticsView' /* webpackChunkName: "statistics-page"*/
  ),
);

const MainPage = () => {
  return (
    <div>
      <NavBarMainPage />
      <Suspense fallback={null}>
        <Switch>
          <Route path={endpoints.accounts} component={AccountsView} />
          <Route path={endpoints.income} component={IncomeView} />
          <Route path={endpoints.expence} component={ExpenceView} />
          <Route path={endpoints.statistics} component={StatisticsView} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default MainPage;
