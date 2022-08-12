import Container from 'components/Container';
import Modal from 'components/Modal';
import LoginPage from 'pages/LoginPage';
import MainPage from 'pages/MainPage';
import RegisterPage from 'pages/RegisterPage';
import { useDispatch, useSelector } from 'react-redux';
import { stateModal } from 'redux/modal/modal-operation';
import { getStateModal, getTypeModal } from 'redux/modal/modal-selector';
import FormAddExpense from 'components/FormAddExpense';
import { buttonsAccounts } from 'some-serv';

import './styles/main.scss';
import FormAddIncome from 'components/FormAddIncome';
import ModalView from 'components/ModalView';

function App() {
  const isOpenModal = useSelector(getStateModal);
  const dispatch = useDispatch();

  const onCloseModal = () => {
    dispatch(stateModal({ value: false, type: '' }));
  };

  return (
    <div className="App">
      <Container>
        {/* <LoginPage /> */}
        <MainPage />
        {/* <RegisterPage /> */}
      </Container>
      {isOpenModal && (
        <Modal onCloseModal={onCloseModal}>
          <ModalView onCloseModal={onCloseModal} />
        </Modal>
      )}
    </div>
  );
}

export default App;
