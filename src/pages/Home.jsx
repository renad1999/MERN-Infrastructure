import { useEffect } from 'react';
import { useItemsContext } from '../context//hooks/useItemsContext'

import ItemDetailsPage from '../components/ItemDetailsPage';
import ItemForm from '../components/ItemForm';

const Home = () => {
const {items, dispatch} = useItemsContext()

    useEffect(() => {
const fetchItems = async () => {
const response = await fetch('api/items')
const json = await response.json()

if (response.ok) {
 dispatch({type: 'SET_ITEMS', payload: json})
}
}

fetchItems()
    }, [])
     

    return (
        <div className="home">
             <div className="items">
                {items && items.map((item) => (
                    <ItemDetailsPage key={item._id} item={item}/>
                ))}
                
            </div>
            <ItemForm />
        </div>
    )}


export default Home