import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import MenuComponent from './components/sidebar/MenuComponent';
import './App.css';
import SearchPage from './components/search-orders/SearchPage';

function App() {
  return (
    <div className="App">  
      <Router>
        <div style={{width: '100vw', backgroundColor: '#f4f6f9', position: 'relative'}}>
          <MenuComponent />
          <div style={{marginLeft: '65px', overflowY: 'hidden', padding: '24px'}}>
            <Routes>
              <Route exact path="/Search-orders" element={<SearchPage/>}></Route>
            </Routes>
          </div>
        </div>
       </Router>

    </div>
  );
}

export default App;