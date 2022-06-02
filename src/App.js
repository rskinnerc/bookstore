import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Books from './pages/Books';
import Categories from './pages/Categories';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
