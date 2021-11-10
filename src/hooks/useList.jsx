import { useEffect, useState } from "react";
import { ListItems, ListUrl } from "../services/listItemService";
import { ConfigService } from "../services/config";
export const UseList = () => {
  const [listItems, setListItems] = useState();
  const [listOfPokemons, setListOfPokemons] = useState();
  const [loadPokes, setLoadPokes] = useState(false);


const urlBase = ConfigService.urlBase;

  const getListItems = async (url) => {
    try {
      const data = await ListItems(url || urlBase);
      setListItems(data);
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
        const data = await ListUrl(listItems.results);
        setListOfPokemons(data);
      } catch (err) {
        console.log(err);
      }
    };
    getUrlItems();
  }, [listItems, loadPokes]);

  return {
    listItems,
    listOfPokemons,
    getListItems
  };
};
