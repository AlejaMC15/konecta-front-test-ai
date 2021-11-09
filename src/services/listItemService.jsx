import { ConfigService } from './config';

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

    }
    static ListUrl = async () => {
        try {

        } catch (e) {
            console.log(e);
        }
    }
}