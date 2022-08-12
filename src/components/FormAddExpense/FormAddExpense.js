import React from 'react';
import c from './FormAddExpense.module.scss';
import { optionsExpense } from 'some-serv/index';
import Button from 'components/Button';
import { useState } from 'react';

const FormAddExpense = ({ onCloseModal }) => {
  const [option, setIotion] = useState('');
  const [value, setValue] = useState(0);
  return (
    <form className={c.formAddExpense}>
      <label className={c.label}>
        Вид расхода:
        <select name="" id="" className={c.select}>
          <option></option>
          {optionsExpense.map(({ value, id }) => (
            <option key={id} value={value}>
              {value}
            </option>
          ))}
        </select>
      </label>
      <label className={c.label}>
        Сумма:
        <input className={c.input} type="number" />
      </label>

      <div className={c.boxBtn}>
        <div className={c.btn}>
          <Button title="Отмена" onClick={onCloseModal} />
        </div>
        <div className={c.btn}>
          <Button title="Добавить расход" />
        </div>
      </div>
    </form>
  );
};

export default FormAddExpense;
