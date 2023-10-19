import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Home from './components/views/Home/Home';
import ProductsTable from './components/views/productsTable/ProductsTable';

function App() {
  return (
    <Router>
      <Navigation/>
      <main>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/product/table" element={<ProductsTable/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
