import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import Jewelery from './Components/Jewelery';
import Electronics from './Components/Electronics';
import MenClothing from './Components/MenClothing';
import SignUPPage from './Pages/SignUpPage';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import WomenClothing from './Components/WomenClothing';
import CartPage from './Pages/CartPage';
import WishListPage from './Pages/WishListPage';


function App() {
  return (
    <div>
      {/* <h1>this is app page</h1> */}
      <Router>
        <Routes>
          <Route path = "/" element = {<HomePage/>}/>
          <Route path = "/products/Electronics" element = {<Electronics/>}/>
          <Route path = "/products/Jewelery" element = {<Jewelery/>}/>
          <Route path = "/products/mensClothing" element = {<MenClothing/>}/>
          <Route path = "/products/womensClothing" element = {<WomenClothing/>}/>
          <Route path = "/signupPage" element = {<SignUPPage/>}/>
          <Route path = "/loginPage" element = {<LoginPage/>}/>
          <Route path = "/CartPage" element = {<CartPage/>}/>
          <Route path = "/wishlist" element = {<WishListPage/>}/>

        </Routes>
      </Router>
      </div>
   
  );
}

export default App;
