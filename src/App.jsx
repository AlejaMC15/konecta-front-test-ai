import { ListItemsProvider } from './context/listItemContext';
import { UseList } from './hooks/useList';
import ListPokemons from './components/ListPokemons'

const App = () => {
    const { listItems } = UseList();

    return (
        <>
            <ListItemsProvider value={{ listItems }}>
                <ListPokemons />
            </ListItemsProvider>
        </>
    );
};

export default App;