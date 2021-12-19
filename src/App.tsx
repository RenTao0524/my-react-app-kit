import React from 'react';
import { HashRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
