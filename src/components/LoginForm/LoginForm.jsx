import Button from 'components/Button';
import { useState } from 'react';
import c from './LoginForm.module.scss';

const LoginForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleInput = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  return (
    <form className={c.form}>
      <div className={c.boxLabels}>
        <label className={c.label}>
          Имя пользователя:
          <input
            type="text"
            value={name}
            name="name"
            onChange={handleInput}
            className={c.input}
          />
        </label>
        <label className={c.label}>
          Пароль:
          <input
            type="text"
            value={password}
            name="password"
            onChange={handleInput}
            className={c.input}
          />
        </label>
      </div>
      <div className={c.boxBtn}>
        <Button title="Войти" />
      </div>
    </form>
  );
};

export default LoginForm;
