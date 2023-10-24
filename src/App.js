import './App.css';
import Obligations from './Oblies';

export default function App() {
  return (
    <>
      <AppHeader />
      <AppContainer />
      <AppFooter />
    </>
  );
}

function AppHeader() {
  return (
    <header className='AppHeader'>
      <h1>ThyObli</h1>
    </header>
  );
}

function AppContainer() {
  return (
    <div className='AppContainer'>
      <Obligations />
    </div>
  );
}

function AppFooter() {
  return (
    <footer className='AppFooter'>
      <p>© Matheus Viana</p>
    </footer>
  );
}
