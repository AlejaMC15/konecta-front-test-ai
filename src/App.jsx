import { ListItemsProvider } from './context/listItemContext';
import { UseList } from './hooks/useList';
import ListPokemons from './components/ListPokemons';

const App = () => {
    const { listItems, listOfPokemons } = UseList();

    return (
        <>
            <ListItemsProvider value={{ listItems, listOfPokemons }}>
                <ListPokemons />
            </ListItemsProvider>
        </>
    );
};

export default App;