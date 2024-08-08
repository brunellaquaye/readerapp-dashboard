
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VerificationScreen1 from './pages/VerificationScreen1'; 
import VerifyCodeScreen from './pages/VerifyCodeScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element = {<VerifyCodeScreen/>} />
          <Route path="verification" element={<VerificationScreen1 />} />
          <Route path="verify code" element={<VerifyCodeScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
          