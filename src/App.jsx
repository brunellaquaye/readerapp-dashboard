
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VerificationScreen from './pages/VerificationScreen'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element = {<VerificationScreen/>} />
          <Route path="verification" element={<VerificationScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
          