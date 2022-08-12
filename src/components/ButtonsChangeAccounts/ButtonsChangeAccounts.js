import React from 'react';
import Button from 'components/Button';
import c from './ButtonsChangeAccounts.module.scss';
import { useDispatch } from 'react-redux';
import { stateModal } from 'redux/modal/modal-operation';
import { buttonsAccounts } from 'some-serv';

const ButtonsChangeAccounts = () => {
  const dispatch = useDispatch();

  const onOpenModal = e => {
    let typeModal = '';
    switch (e.target.innerText) {
      case buttonsAccounts.add:
        typeModal = buttonsAccounts.add;
        break;
      case buttonsAccounts.remove:
        typeModal = buttonsAccounts.remove;
        break;
      case buttonsAccounts.delete:
        typeModal = buttonsAccounts.delete;
        break;

      default:
        break;
    }
    dispatch(stateModal({ value: true, type: typeModal }));
  };

  return (
    <div className={c.boxBtnsAdd}>
      <ul className={c.list}>
        <li className={c.item}>
          <Button
            title="Добавить расход"
            type="add"
            onClick={e => onOpenModal(e)}
          />
        </li>
        <li className={c.item}>
          <Button
            title="Добавить доход"
            type="add"
            onClick={e => onOpenModal(e)}
          />
        </li>
        <li className={c.item}>
          <Button
            title="Удалить текущий счет"
            type="delete"
            onClick={e => onOpenModal(e)}
          />
        </li>
      </ul>
    </div>
  );
};

export default ButtonsChangeAccounts;
