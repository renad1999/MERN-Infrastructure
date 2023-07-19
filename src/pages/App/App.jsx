import { useState } from 'react';
import {  Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
// import Shop from '../../pages/Shop/Shop';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar'
import ItemDetailsPage from '../../components/ItemDetailsPage';
import About from '../../pages/About/About';
import ItemForm from '../../components/ItemForm';
import NewOrderPage from '../../components/NewOrderPage';
import AllItemsPage from '../../pages/AllItemsPage';
import UpdateItemsPage from '../../pages/UpdateItemsPage';
// import Wishlist from '../../components/Wishlist';
import Homepage from '../../pages/Homepage';

export default function App() {
  const [user, setUser] = useState(getUser());
  // const [wishlist, setWishlist] = useState([]);

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/form" element={<ItemForm />} />
              {/* <Route path="/" element={<Home />} /> */}
              {/* <Route path="/shop" element={<Shop />} /> */}
              <Route path="/orders" element={<OrderHistoryPage />} />
              <Route path="/detail" element={<ItemDetailsPage />} />
              <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} />
              <Route path="/about" element={<About />} />
              <Route path="/" element={<Homepage />} /> 
              <Route path="/:id" element={<ItemDetailsPage user={user} setUser={setUser} />}/>
              <Route path="/shop" element={<AllItemsPage />} />
              <Route path="/updateitem" element={<UpdateItemsPage />} />
              {/* <Route path="/wishlist" element={<Wishlist  />} /> */}
              <Route path="/itemform" element={<ItemForm />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
