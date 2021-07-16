import WatchItemsList from "./components/WatchItemsList";
import NewItemForm from "./components/new-item-form-components/NewItemForm";
import {useEffect, useState} from "react";
import {fetchAll, fetchOne, postNewItem, setIsWatchedItem, removeAnItem} from './backend/UserData';
import {searchKeyword} from './backend/SearchEngine'
import {Spinner} from "react-bootstrap";
import SearchBar from "./components/new-item-form-components/SearchBar";


function App() {
    const [watchItems, setWatchItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // Fetch initial data
    useEffect(()=>{
        setIsLoading(true);
        fetchAll().then(lst => {
            setWatchItems(lst);
            setIsLoading(false)
        });
    }, [])

    const toggleIsWatched = id => {
        const newItems = [...watchItems];
        const found = newItems.find(i => i.id === id);
        found.isWatched = !found.isWatched;
        setWatchItems(newItems)
        setIsWatchedItem(id, found.isWatched)
    }

    const handleDeleteItem = id => {
        const newItems = watchItems.filter(i => i.id !== id);
        setWatchItems(newItems)
        removeAnItem(id)
    }

    return (
        <div className="App">
            <NewItemForm searchKeyword={searchKeyword}/>
            {isLoading && <Spinner animation='border'/>}
            {!isLoading && <WatchItemsList list={Object.values(watchItems)} toggleIsWatched={toggleIsWatched}
                            onDeleteItem={handleDeleteItem}/>}
            {/*<SearchBar searchKeyword={searchKeyword}/>*/}
        </div>
    );
}

export default App;
