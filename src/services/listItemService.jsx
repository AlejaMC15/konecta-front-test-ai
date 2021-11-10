
export const ListItems = async (url) => {
  try {
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const ListUrl = async (listItems) => {
  try {
    const requests = listItems?.map((item) => fetch(item.url));
    const responses = await Promise.all(requests);
    const dataApi = await Promise.all(responses?.map((resp) => resp.json()));
    return dataApi;
  } catch (e) {
    console.log(e);
  }
};