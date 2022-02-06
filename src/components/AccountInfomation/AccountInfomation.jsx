import Button from 'components/Button';
import c from './AccountInfomation.module.scss';
const AccountInfomation = ({ account }) => {
  return (
    <div className={c.accountInformation}>
      <div className={c.accountInfText}>
        <p className={c.titleText}>
          Наименование счета:
          <span className={c.inf}>{account.name}</span>
        </p>
        <p className={c.titleText}>
          Текущий баланс:
          <span className={c.inf}>{account.balance}</span>
        </p>
        <p className={c.titleText}>
          Вид валюты:
          <span className={c.inf}>{account.curency}</span>
        </p>
        <p className={c.titleText}>
          Дата регистрации:
          <span className={c.inf}>{account.registration}</span>
        </p>
      </div>
      <div>
        <Button title="Добавить расход " />
        <Button title="Добавить доход" />
      </div>
      <div>
        <Button title="Удалить текущий счёт" />
      </div>
    </div>
  );
};

export default AccountInfomation;
