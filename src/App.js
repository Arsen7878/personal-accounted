import Container from 'components/Container';
import Modal from 'components/Modal';
import LoginPage from 'pages/LoginPage';
import MainPage from 'pages/MainPage';
import RegisterPage from 'pages/RegisterPage';
import { useDispatch, useSelector } from 'react-redux';
import { stateModal } from 'redux/modal/modal-operation';
import { getStateModal } from 'redux/modal/modal-selector';
import { endpoints } from 'routes';

import './styles/main.scss';
import ModalView from 'components/ModalView';
import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {
  const isOpenModal = useSelector(getStateModal);
  const dispatch = useDispatch();

  const onCloseModal = () => {
    dispatch(stateModal({ value: false, type: '' }));
  };

  return (
    <div className="App">
      <Container>
        <Suspense>
          <Switch>
            <Route path={endpoints.login}>
              <LoginPage />
            </Route>
            <Route path={endpoints.main}>
              <MainPage />
            </Route>
            <Route path={endpoints.register}>
              <RegisterPage />
            </Route>
          </Switch>
        </Suspense>
        {isOpenModal && (
          <Modal onCloseModal={onCloseModal}>
            <ModalView onCloseModal={onCloseModal} />
          </Modal>
        )}
      </Container>
    </div>
  );
}

export default App;
