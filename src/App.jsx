// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './components/Header';
import AppRouter from './components/Router';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <div className="router-div">
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;