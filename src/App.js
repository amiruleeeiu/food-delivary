import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Routers from './routes/Routers';
import { BrowserRouter } from "react-router-dom";
import Carts from './components/Carts/Carts';
import { UserAuthContextProvider } from './Context/UserAuthContext';

function App() {
  
  return (
    <UserAuthContextProvider>
      <BrowserRouter>
        <Header/>
        <Carts/>
        <Routers/>
        <Footer/>
      </BrowserRouter>
    </UserAuthContextProvider>
  );
}

export default App;
