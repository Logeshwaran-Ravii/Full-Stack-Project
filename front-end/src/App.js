import Header from './component/layout/Header';
import './App.css';
import Home from './component/Home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import {HelmetProvider} from 'react-helmet-async'
import ProductDetail from './component/ProductDetail';
import SearchedProduct from './component/SearchedProduct';

function App() {
  return (
    <Router>
      <div className="App">
        <HelmetProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:keyword' element={<SearchedProduct />} />
            <Route path='/productDetail/:id' element={<ProductDetail />}  />
          </Routes>       
        </HelmetProvider>
      </div>
    </Router>
  );
}

export default App;
