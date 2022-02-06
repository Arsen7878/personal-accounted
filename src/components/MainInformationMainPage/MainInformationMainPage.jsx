import AccountDetails from 'components/AccountDetails';
import AsideAccounts from 'components/AsideAccounts';
import c from './MainInformationMainPage.module.scss';
const MainInformationMainPage = () => {
  return (
    <div className={c.blockInf}>
      <AsideAccounts />
      <AccountDetails />
    </div>
  );
};

export default MainInformationMainPage;
