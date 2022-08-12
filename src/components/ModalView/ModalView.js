import { useSelector } from 'react-redux';
import { getTypeModal } from 'redux/modal/modal-selector';
import { buttonsAccounts } from 'some-serv';
import FormAddExpense from 'components/FormAddExpense';
import FormAddIncome from 'components/FormAddIncome';
import FormDeleteAccount from 'components/FormDeleteAccount';
import c from './ModalView.module.scss';

const ModalView = ({ onCloseModal }) => {
  const typeModal = useSelector(getTypeModal);

  return (
    <div className={c.modalView}>
      {typeModal === buttonsAccounts.add && (
        <FormAddExpense onCloseModal={onCloseModal} />
      )}
      {typeModal === buttonsAccounts.remove && (
        <FormAddIncome onCloseModal={onCloseModal} />
      )}
      {typeModal === buttonsAccounts.delete && (
        <FormDeleteAccount onCloseModal={onCloseModal} />
      )}
    </div>
  );
};

export default ModalView;
