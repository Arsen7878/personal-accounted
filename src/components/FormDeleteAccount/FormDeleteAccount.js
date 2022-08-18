import Button from 'components/Button';
import c from './FormDeleteAccount.module.scss';
import React from 'react';

import { useDispatch } from 'react-redux';
import {
  stateAccounts,
  stateActiveID,
} from 'redux/accounts/accounts-operations';
import { useSelector } from 'react-redux';
import {
  getActiveAccountID,
  getStateAccounts,
} from 'redux/accounts/accounts-selectors';
import { useHistory } from 'react-router-dom';
import { endpoints } from 'routes';

const FormDeleteAccount = ({ onCloseModal }) => {
  const activeID = useSelector(getActiveAccountID);
  let accounts = useSelector(getStateAccounts);
  const dispatch = useDispatch();
  const history = useHistory();
  const name = accounts.filter(el => el.id === Number(activeID))[0].name;

  const onDeleteAccount = e => {
    dispatch(stateAccounts(Number(activeID)));
    accounts = accounts.filter(el => el.id !== Number(activeID));

    if (accounts.length !== 0) {
      history.push(`${accounts[0].id}`);
      dispatch(stateActiveID(accounts[0]?.id));
    } else {
      history.push(endpoints.accounts);
      dispatch(stateActiveID(null));
    }

    onCloseModal(e);
  };

  return (
    <div className={c.deleteAccountBox}>
      <p className={c.text}>Уверен, что хочешь удалить счет {name}?</p>
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
