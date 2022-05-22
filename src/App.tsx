import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'

import Filter from './components/FIlter';
import { Header } from './components/Header';
import { Users } from './components/Users';
import { UserContextProvider } from './contexts/UserContext';
import './styles/global.scss';

function App() {


  return (
    <div className="App">
      <Header/>
      <main>
      <UserContextProvider>
        <Filter/>
        <Users/>
      </UserContextProvider>
      </main>
      <ToastContainer/>
    </div>
  );
}

export default App;
