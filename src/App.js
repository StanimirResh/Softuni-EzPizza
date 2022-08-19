import { Main } from './components/common/Main';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { useLocalStorage } from './hooks/useLocalStorage';
import { UserContext } from './contexts/userContext';
import React from 'react';

function App() {
  const [user, setUser] = useLocalStorage('user', {})

  const userLogin = (userData) => {
    setUser(userData)
  }

  const userLogout = () => {
    setUser({});
    localStorage.clear();
  }

  return (
    <UserContext.Provider value={{ user, userLogin, userLogout }}>
      <Header />
      <Main />
      <Footer />
    </UserContext.Provider>
  );
}

export default App;
