import React, { useEffect } from 'react';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const recipes = [
    {
      "id": 1,
      "title": "Bolo de cenoura de liquidificador",
      "nivel": "Iniciante",
      "img": "https://img.itdg.com.br/tdg/images/blog/uploads/2020/02/BOLODECENOURA.jpg?mode=crop&width={:width=%3E150,%20:height=%3E130}",
      "ingredients": [
        "3 cenouras grandes (370g)",
        "4 ovos médios",
        "1½ xícara de óleo de girassol (360ml)",
        "2 xícaras de açúcar refinado(360g)",
        "3 xícaras e ¼ de farinha de trigo (390g)",
        "1 colher (sopa) fermento químico para bolos (18g)",
        "1 pitada de sal",
        "Óleo para untar a forma",
        "Farinha para polvilhar a forma"]
    },
    {
      "id": 2,
      "title": "Bolo de cenoura de liquidificador",
      "nivel": "Iniciante",
      "img": "https://img.itdg.com.br/tdg/images/blog/uploads/2020/02/BOLODECENOURA.jpg?mode=crop&width={:width=%3E150,%20:height=%3E130}",
      "ingredients": [
        "3 cenouras grandes (370g)",
        "4 ovos médios",
        "1½ xícara de óleo de girassol (360ml)",
        "2 xícaras de açúcar refinado(360g)",
        "3 xícaras e ¼ de farinha de trigo (390g)",
        "1 colher (sopa) fermento químico para bolos (18g)",
        "1 pitada de sal",
        "Óleo para untar a forma",
        "Farinha para polvilhar a forma"]
    }
  ];

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);



  return (
    <Routes />
  );
}

export default App;
