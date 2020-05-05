import React, { useEffect } from 'react';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.css';
import data from './receitas.json';


function App() {

  const recipes = data.receitas;
  useEffect(() => {
    localStorage.clear();
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);



  return (
    <Routes />
  );
}

export default App;
