import Container from 'components/Container';
import LoginPage from 'pages/LoginPage';
import MainPage from 'pages/MainPage';
import RegisterPage from 'pages/RegisterPage';

import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <Container>
        {/* <LoginPage /> */}
        <MainPage />
        {/* <RegisterPage /> */}
      </Container>
    </div>
  );
}

export default App;
