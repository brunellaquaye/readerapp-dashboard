
import { createRoot } from 'react-dom/client';
import App from './App'; // Ensure this path is correct

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);