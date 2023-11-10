import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import MenCategory from "./components/MenCategory";
import WomenCategory from "./components/WomenCategory";



function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/SignIn" element={<SignIn/>}></Route>
            <Route path="/cart" element={<Cart />} />
            
      
          </Routes>
          <Routes>
  <Route path="/men" element={<MenCategory />} />
  <Route path="/women" element={<WomenCategory />} />
  
  
</Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
