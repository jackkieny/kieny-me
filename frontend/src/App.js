import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';
import Main from './components/Main';
import Test from './components/Test';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/test" element={<Test/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
