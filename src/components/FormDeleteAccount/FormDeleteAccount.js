import Button from 'components/Button';
import c from './FormDeleteAccount.module.scss';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { stateAccounts } from 'redux/accounts/accounts-operations';

const FormDeleteAccount = ({ onCloseModal }) => {
  const history = useHistory();
  const id = Number(history?.location?.state?.path);
  const dispatch = useDispatch();

  const onDeleteAccount = e => {
    dispatch(stateAccounts(id));
    onCloseModal(e);
  };
  return (
    <div className={c.deleteAccountBox}>
      <p className={c.text}>Уверен, что хочешь удалить счет {id}? </p>
      <div className={c.btnBox}>
        <div>
          <Button title="Отмена" onClick={e => onCloseModal(e)} />
        </div>
        <div>
          <Button
            title="Удалить текущий счет"
            onClick={e => onDeleteAccount(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default FormDeleteAccount;
