import { useEffect, useState } from 'react';
import * as itemsAPI from '../utilities/items-api';
import * as usersAPI from '../utilities/users-api';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import './ItemDetailsPage.css';

export default function ItemDetails({user, setUser}) {
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [error, setError] = useState('');
  const { id } = useParams();

  useEffect(function () {
    async function getItem() {
      try {
        const item = await itemsAPI.getById(id);
        setItem(item);
      } catch (error) {
        setError('Error fetching item details');
      }
    }
    getItem();
  }, [id]);

  const handleDelete = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`/api/items/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        navigate('/shop');
      } else {
        const json = await response.json();
        setError(json.error);
      }
    } catch (error) {
      console.error(error);
      setError('Error deleting item');
    }
  };

  const addToWishlist = async () => {
    try {
      
      const wishlist = await usersAPI.addToWishlist(id);
      console.log(wishlist)
    } catch (error) {
      console.log(error)
    }
  }

  const index = async () => {
    try {
      
      const wishlist = await usersAPI.index(id);
      console.log(wishlist)
    } catch (error) {
      console.log(error)
    }
  }



  console.log("USER ID --->", user._id)
  return (
    <div>
      <h1>Item Details page</h1>
      {item ? (
        <ul>
          <li>
            <p className='items-img'><img src={item.image} alt="" /></p>
            <p>{item.name}</p>
            <p>£{item.price}</p>
            <p>{item.description}</p>
          </li>
        </ul>
      ) : (
        <p>Loading item details...</p>
      )}

      <div className="buttonsnew">
        <button onClick={addToWishlist}>♡</button>
        {user._id === "64aea2a5e8e58477bbcc85f7" && (
          <>
            <button onClick={handleDelete}>
              <Link to={'/allitems'}>Delete</Link>
              {/* <Link to={'/updateitem'}>Update</Link> */}
            </button>
           

           

           
          </>
        )}
      </div>
    </div>
  );
};