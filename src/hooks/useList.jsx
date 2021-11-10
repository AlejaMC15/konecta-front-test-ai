import { useEffect, useState } from "react";
import { ListItems, ListUrl } from "../services/listItemService";

export const UseList = () => {
  const [listItems, setListItems] = useState();
  const [listOfPokemons, setListOfPokemons] = useState();
  const [loadPokes, setLoadPokes] = useState(false);

  const getListItems = async () => {
    try {
      const data = await ListItems();
      setListItems(data.results);
      setLoadPokes(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getListItems();
  }, []);

  useEffect(() => {
    const getUrlItems = async () => {
      try {
        const data = await ListUrl(listItems);
        setListOfPokemons(data);
      } catch (err) {
        console.log(err);
      }
    };
    getUrlItems();
  }, [listItems, loadPokes]);
 
  return {
    listItems,
    listOfPokemons
  };
};
