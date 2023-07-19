import { useState, useEffect } from "react";
import { useItemsContext } from '../context/hooks/useItemsContext';
import { useNavigate, useParams } from "react-router-dom"
import * as itemsAPI from '../utilities/items-api';

const UpdateItemsPage = () => {
  const { id} = useParams();
  const { dispatch } = useItemsContext();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  
  // You may need to initialize the 'item' state with the data from the previous forms
  // Replace the empty strings with the appropriate data.
  const [item, setItem] = useState({
    name: '',
    price: '',
    image: '',
    description: '',
  });

  // useEffect(() => {

  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const itemData = { name, price, description, image };

    const response = await fetch('/api/items', {
      method: 'POST',
      body: JSON.stringify(itemData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields || []);
    } else {
      setName('');
      setPrice('');
      setImage('');
      setDescription('');
      setError(null);
      setEmptyFields([]);
      console.log('New Item Added', json);
      dispatch({ type: 'CREATE_ITEM', payload: json });
    }
  };

  return (
    <div>
      
      <form className="item-form" onSubmit={handleSubmit}>
      <h1>Update item</h1>
        <label>Name</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label>Description</label>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <label>Price</label>
        <input
          type="text"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <label> Image</label>
        <input
          type="text"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
        <button type="submit">Update Item</button>
        {error && <div className="error">{error}</div>}

      </form>
    </div>
  );
};

export default UpdateItemsPage;
