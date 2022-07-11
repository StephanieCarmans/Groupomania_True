
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Connect from './pages/Connect';
import News from './pages/News';
import NotFound from './pages/NotFound';
import axios from 'axios';

// Recuperation du token JWT dans le local storage
const token = localStorage.getItem('token')
// On utilise cette methode pour soumettre notre token a toute les routes qui en on besoin pour etre affichée
axios.interceptors.request.use(
  config => {
    config.headers.authorization = `${token}`;
    return config;
  },
 error => {
   return Promise.reject(error);
 }
)

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Connect />} />
                <Route path="news" element={<News />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}






export default App;
