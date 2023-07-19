import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../utilities/items-api';
import { Link} from 'react-router-dom';

import UserLogOut from '../components/UserLogout/UserLogout';
import ClothingList from '../components/ClothingList/ClothingList'
import OrderDetail from '../components/OrderDetail/OrderDetail'

import Logo from '../components/Logo/Logo'




export default function NewOrderPage({user, setUser }) {
   const [items, setItems] = useState([]);



    useEffect( function() {
      async function getItems() {
      const items = await itemsAPI.getAll();
      setItems(items);
      }

    getItems();
    }, []);


  return (
    <main className="NewOrderPage">
        <aside>
          <Logo />
      
          <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
          <UserLogOut user={user} setUser={setUser} />
        </aside>
        <ClothingList   />
        <OrderDetail />
  </main>


  );
}