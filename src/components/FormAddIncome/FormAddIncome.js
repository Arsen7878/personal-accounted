import React from 'react';
import c from './FormAddIncome.module.scss';
import { optionsIncome } from 'some-serv';
import Button from 'components/Button';

const FormAddIncome = ({ onCloseModal }) => {
  return (
    <form className={c.formAddExpense}>
      <label className={c.label}>
        Вид дохода:
        <select name="" id="" className={c.select}>
          <option></option>
          {optionsIncome.map(({ value, id }) => (
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
          <Button title="Добавить доход" />
        </div>
      </div>
    </form>
  );
};

export default FormAddIncome;
