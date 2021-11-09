import { useEffect, useState } from 'react';
import ListItemService from '../services/listItemService';

export const UseList = () => {
    const [listItems, setListItems] = useState();




    const getListItems = async () => {

        try {
            const data = await ListItemService.ListItems();
            setListItems(data);

        }
        catch (err) {
            console.log(err);
        }
    }

    const getUrlItems = async () => {
        try {
            /* const data = await  */
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getListItems();
    }, []);

    return{
    listItems
    }

}