import Button from 'components/Button';
import c from './AddAccount.module.scss';
import src from 'images/plus.svg';

const AddAccount = () => {
  return (
    <div className={c.boxAddAccount}>
      <Button>
        <div className={c.boxCreateAccount}>
          <img src={src} alt="plus" className={c.plus} />
          <p className={c.text}>Добавить счёт</p>
        </div>
      </Button>
    </div>
  );
};

export default AddAccount;
