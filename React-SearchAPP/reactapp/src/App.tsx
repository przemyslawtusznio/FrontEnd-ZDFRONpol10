import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomPage/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterForm from './components/RegisterForm/RegisterForm';
import LoginPage from './components/LoginPage/LoginPage';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Helpers/firebaseConfig'
import UserPage from './components/UserPage/UserPage';
import SearchPage from './components/SearchPage/SearchPage';
import { authContext } from './Helpers/authContext';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if(user){
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  });

  return (
    <div className="App">
      <BrowserRouter>
      <authContext.Provider value={loggedIn}>
          {/* 1 grupa elementów to elementy, które mają cały czas się wyświetlać - będą umiejscowione bezpośrednio w komponencie BrowserRouter */}
          <Navbar />
          {/* 2 grupa elementów to elementy, które mają się zmieniać - będą owinięte w element Routes i Route */}
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<RegisterForm />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/user' element={<UserPage />} />
            <Route path='/search' element={<SearchPage />} />
          </Routes>
        </authContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;