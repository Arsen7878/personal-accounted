import Button from 'components/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { endpoints } from 'routes';
import c from './RegisterForm.module.scss';

const RegisterForm = () => {
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

  const onClick = () => {};

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
        <Button title="Зарегестрироваться" ocClick={onClick} />
      </div>
      <p className={c.text}>
        Если Вы зарегестрированы{' '}
        <Link to={endpoints.login}>
          <span className={c.linkText}>нажмите тут</span>
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
