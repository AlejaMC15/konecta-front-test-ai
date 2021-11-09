import { ConfigService } from './config';
export default class ListItemService {
    static dataApi = []
    static urlBase = ConfigService.urlBase;


    static ListItems = async () => {
        try {
            const response = await fetch(ListItemService.urlBase);
            const data = response.json();
            return data;
        } catch (e) {
            console.log(e);
        }

    }
    static ListUrl = async (listItems) => {
        const dataApi = []

        try {
            listItems.map(async (item) => {

                const response = await fetch(item.url);

                dataApi.push(response);
                return  dataApi;
            })

        } catch (e) {
            console.log(e);
        }
    }
}