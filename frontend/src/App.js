import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Connect from './pages/Connect';
import News from './pages/News';
import NotFound from './pages/NotFound';

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
