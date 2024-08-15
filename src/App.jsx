
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SupportScreen from './pages/Support/Screens/SupportScreen';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="support/*" element={<SupportScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
