import Button from 'components/Button';
import c from './FormDeleteAccount.module.scss';
import React from 'react';

import { useDispatch } from 'react-redux';
import {
  stateAccounts,
  stateActiveID,
} from 'redux/accounts/accounts-operations';
import { useSelector } from 'react-redux';
import { getActiveAccountID } from 'redux/accounts/accounts-selectors';
import { useHistory } from 'react-router-dom';

const FormDeleteAccount = ({ onCloseModal }) => {
  const dispatch = useDispatch();
  const activeID = useSelector(getActiveAccountID);
  const history = useHistory();

  const onDeleteAccount = e => {
    dispatch(stateAccounts(activeID));
    dispatch(stateActiveID(null));
    onCloseModal(e);
  };

  return (
    <div className={c.deleteAccountBox}>
      <p className={c.text}>Уверен, что хочешь удалить счет {activeID}? </p>
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
