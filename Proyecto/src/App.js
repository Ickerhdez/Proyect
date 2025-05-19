import React from 'react';
import { Navigate } from 'react-router-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import TopNavBar from './components/TopNavBar';
import Footer from './components/footer';
import Home from './pages/Home';

const items = []; // Vacío por ahora, pero se verá texto

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <TopNavBar />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/home" element={<Home items={items} />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
