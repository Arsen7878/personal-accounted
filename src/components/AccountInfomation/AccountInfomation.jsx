import Button from 'components/Button';
import c from './AccountInfomation.module.scss';
const AccountInfomation = ({ account }) => {
  if (account) {
    const { name, balance, currency, registration } = account;
    return (
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

        <div className={c.boxBtnsAdd}>
          <ul className={c.list}>
            <li className={c.item}>
              <Button title="Добавить расход" type="add" />
            </li>
            <li className={c.item}>
              <Button title="Добавить доход" type="add" />
            </li>
            <li className={c.item}>
              <Button title="Удалить текущий счёт" type="delete" />
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return <div></div>;
};

export default AccountInfomation;
