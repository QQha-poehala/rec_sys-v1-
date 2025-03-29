import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FormPage from './pages/formPage/formPage';
import WelcomePage from './pages/welcomePage/welcomePage';
import ResultPage from './pages/resultPage/resultPage';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path='/result' element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
