import { createContext,  useReducer } from 'react'

export const ItemsContext = createContext()

export const itemsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ITEMS':
            return {
                items: action.payload
            }
            case 'CREATE_ITEM':
                return {
                    items: [action.payload, ...state.items]
                }
                case 'DELETE_ITEM':
                    return {
                        items: state.items.filter((i) => i._id !== action.payload._id)
                    }
                    case 'UPDATE_ITEM':
                        const { id, data } = action.payload;
                        return{
                            items: state.items.map(item => {
                                if(item._id===id) {
                                    item = data;
                                }
                            })
                               
                        }
                default: 
                return state
    }
}




export const ItemsContextProvider = ({ children }) => {
const [state, dispatch] = useReducer(itemsReducer, {
    items: null
})




    return (
        <ItemsContext.Provider value={{...state, dispatch}}>
{ children }
        </ItemsContext.Provider>
    )

}