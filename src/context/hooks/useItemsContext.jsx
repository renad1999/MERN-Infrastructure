import { ItemsContext } from '../ItemContext'
import { useContext } from 'react'

export const useItemsContext = () => {
    const context = useContext(ItemsContext)

    if (!context) {
        throw Error('---')
    }
    return context 
}