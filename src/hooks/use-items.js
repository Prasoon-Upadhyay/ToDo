import {useContext} from 'react';
import ItemsContext from '../context/items';

function  useItems()
{
    return useContext(ItemsContext);
}

export default useItems;