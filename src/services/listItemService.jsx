import { ConfigService } from "./config";
export default class ListItemService {
  static urlBase = ConfigService.urlBase;

  static ListItems = async () => {
    try {
      const response = await fetch(ListItemService.urlBase);
      const data = response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  static ListUrl = async (listItems) => {
    try {
      const requests = listItems.map((item) => fetch(item.url));
      const responses = await Promise.all(requests);
      const dataApi = await Promise.all(responses.map((resp) => resp.json()));
      return dataApi;
    } catch (e) {
      console.log(e);
    }
  };
}
