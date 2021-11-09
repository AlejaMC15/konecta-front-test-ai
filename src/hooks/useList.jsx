import { useEffect, useState } from 'react';
import ListItemService from '../services/listItemService';

export const UseList = () => {
    const [listItems, setListItems] = useState();
    const [listOfPokemons, setListOfPokemons] = useState();
    const [loadPokes, setLoadPokes] = useState(true);



    const getListItems = async () => {

        try {
            const data = await ListItemService.ListItems();
            if (data) {
                setListItems(data.results);
                setLoadPokes(false);
            }

        }
        catch (err) {
            console.log(err);
        }
    }



    useEffect(() => {
        getListItems();

    }, []);
    useEffect(() => {
        const getUrlItems = async () => {
            try {
                if (!loadPokes) {
                    const data = await ListItemService.ListUrl(listItems);
                    setListOfPokemons(data);
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        getUrlItems();
    }, [listItems,loadPokes]);

    return {
        listItems,
        listOfPokemons
    }

}