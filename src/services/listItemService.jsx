import { ConfigService } from "./config";

const urlBase = ConfigService.urlBase;

export const ListItems = async () => {
  try {
    const response = await fetch(urlBase);
    const data = response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const ListUrl = async (listItems) => {
  try {
    const requests = listItems.map((item) => fetch(item.url));
    const responses = await Promise.all(requests);
    const dataApi = await Promise.all(responses?.map((resp) => resp.json()));
    return dataApi;
  } catch (e) {
    console.log(e);
  }
};