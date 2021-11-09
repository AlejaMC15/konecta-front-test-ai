import { ListItemsProvider } from "./context/listItemContext";
import { UseList } from "./hooks/useList";
/* import { Routes, Route } from "react-router-dom"; */
import ListPokemons from "./components/ListPokemons";
/* import InfoPokemons from "./components/InfoPokemons"; */

const App = () => {
  const { listItems, listOfPokemons } = UseList();

  return (
    <>
      <ListItemsProvider value={{ listItems, listOfPokemons }}>
        <ListPokemons />
        {/* <Routes>
          <Route exact path="/" component={ListPokemons} />
          <Route exact path="/info/:pokeId" component={InfoPokemons} />
        </Routes> */}
      </ListItemsProvider>
    </>
  );
};

export default App;
