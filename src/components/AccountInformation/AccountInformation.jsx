import ButtonsChangeAccounts from 'components/ButtonsChangeAccounts';
import c from './AccountInformation.module.scss';
const AccountInformation = ({ account }) => {
  if (account.length !== 0) {
    const { name, balance, currency, registration } = account[0];
    return (
      <>
        <div className={c.boxBtn}>
          <div className={c.accountInformation}>
            <div className={c.accountInfText}>
              <h3 className={c.title}>Информация о счёте</h3>
              <p className={c.titleText}>
                Наименование счета:
                <span className={c.inf}>{name}</span>
              </p>
              <p className={c.titleText}>
                Текущий баланс:
                <span className={c.inf}>{balance}</span>
              </p>
              <p className={c.titleText}>
                Вид валюты:
                <span className={c.inf}>{currency}</span>
              </p>
              <p className={c.titleText}>
                Дата регистрации:
                <span className={c.inf}>{registration}</span>
              </p>
            </div>
          </div>
          <ButtonsChangeAccounts />
        </div>
      </>
    );
  }

  return <div></div>;
};

export default AccountInformation;
