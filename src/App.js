import Container from 'components/Container';
import Modal from 'components/Modal';
import LoginPage from 'pages/LoginPage';
import MainPage from 'pages/MainPage';
import RegisterPage from 'pages/RegisterPage';
import { useDispatch, useSelector } from 'react-redux';
import { stateModal } from 'redux/modal/modal-operation';
import { getStateModal } from 'redux/modal/modal-selector';

import './styles/main.scss';

function App() {
  const isOpenModal = useSelector(getStateModal);
  const dispatch = useDispatch();
  const onCloseModal = () => {
    dispatch(stateModal(false));
  };

  return (
    <div className="App">
      <Container>
        {/* <LoginPage /> */}
        <MainPage />
        {/* <RegisterPage /> */}
      </Container>
      {isOpenModal && <Modal onCloseModal={onCloseModal} />}
    </div>
  );
}

export default App;
