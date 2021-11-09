import { ListItemsProvider } from "./context/listItemContext";
import { UseList } from "./hooks/useList";
/* import { BrowserRouter, Routes, Route } from "react-router-dom"; */
import ListPokemons from "./components/ListPokemons";
/* import InfoPokemons from "./components/InfoPokemons"; */

const App = () => {
  const { listItems, listOfPokemons } = UseList();

  return (
    <>
      <ListItemsProvider value={{ listItems, listOfPokemons }}>
        <ListPokemons />
        {/* <BrowserRouter>
          <Routes> */}
            {/* <Route exact path="/info/:pokeId" component={InfoPokemons} /> */}
            {/* <Route exact path="/" component={ListPokemons} /> */}
         {/*  </Routes>
        </BrowserRouter> */}
      </ListItemsProvider>
    </>
  );
};

export default App;
