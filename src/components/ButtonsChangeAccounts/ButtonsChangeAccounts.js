import React from 'react';
import Button from 'components/Button';
import c from './ButtonsChangeAccounts.module.scss';
import { useDispatch } from 'react-redux';
import { stateModal } from 'redux/modal/modal-operation';

const ButtonsChangeAccounts = () => {
  const dispatch = useDispatch();
  const onOpenModal = () => {
    console.log('object');
    dispatch(stateModal(true));
  };
  return (
    <div className={c.boxBtnsAdd}>
      <ul className={c.list}>
        <li className={c.item}>
          <Button title="Добавить расход" type="add" onClick={onOpenModal} />
        </li>
        <li className={c.item}>
          <Button title="Добавить доход" type="add" />
        </li>
        <li className={c.item}>
          <Button title="Удалить текущий счёт" type="delete" />
        </li>
      </ul>
    </div>
  );
};

export default ButtonsChangeAccounts;
