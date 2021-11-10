import { ListItemsProvider } from "./context/listItemContext";
import { UseList } from "./hooks/useList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListPokemons from "./components/ListPokemons";
import InfoPokemons from "./components/InfoPokemons";

const App = () => {
  const { listItems, listOfPokemons, pagination } = UseList();

  return (
    <>
      <ListItemsProvider value={{ listItems, listOfPokemons, pagination }}>
        <Router>
          <Routes>
            <Route path="/" element={<ListPokemons />} />
            <Route path="/info/:pokeId" element={<InfoPokemons />} />
          </Routes>
        </Router>
      </ListItemsProvider>
    </>
  );
};

export default App;
