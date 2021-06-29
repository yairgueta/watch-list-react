import WatchItemsList from "./components/WatchItemsList";
import {useState} from "react";
import NewItemForm from "./components/new-item-form-components/NewItemForm";

const watchItemsList = [
    {
        name: 'Wonder Woman',
        dateCreated: new Date('06/26/2021 12:36'),
        image: 'https://www.nme.com/wp-content/uploads/2017/07/wonderwoman-1280-9amembargo-1488818748850_1280w.jpg',
        yearRelease: 2021,
        description: 'Diana must contend with a work colleague and businessman, whose desire for extreme wealth sends the world down a path of destruction, after an ancient artifact that grants wishes goes missing.',
        isWatched: false,
        id: 1,
    },
    {
        name: 'Spider Man',
        dateCreated: new Date('06/26/2021 14:36'),
        image: 'https://cdn.vox-cdn.com/thumbor/9VgRbWtM8UiDN8iIA5oyIIR_RqQ=/1400x1050/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/22024938/marvels_spiderman_remastered_screenshot_01_disclaimer_en_01oct20.png',
        description: 'When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.',
        yearRelease: 2002,
        isWatched: false,
        id: 2,
    },
    {
        name: 'Iron Man',
        dateCreated: new Date('06/26/2021 15:07'),
        image: 'https://invader.be/wp-content/uploads/2020/07/Iron-man-VR.jpg',
        description: 'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
        yearRelease: 2006,
        isWatched: true,
        id: 3,
    },
    {
        name: 'Captain America: The First Avenger',
        dateCreated: new Date('06/27/2021 17:36'),
        image: 'https://cdn.britannica.com/30/182830-050-96F2ED76/Chris-Evans-title-character-Joe-Johnston-Captain.jpg',
        description: 'Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.',
        yearRelease: 2011,
        isWatched: true,
        id: 4,
    },
    {
        name: 'Thor',
        dateCreated: new Date('06/27/2021 17:55'),
        image: 'https://upload.wikimedia.org/wikipedia/en/9/95/Thor_%28film%29_poster.jpg',
        description: 'The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.',
        yearRelease: 2011,
        isWatched: false,
        id: 6,
    },
    {
        name: 'Ant-Man and the Wasp: Quantumania',
        dateCreated: new Date('06/29/2021 19:24'),
        image: 'https://images-na.ssl-images-amazon.com/images/I/81I08wcUyBL._SL1500_.jpg',
        description: 'The further adventures of Ant-Man and the Wasp.',
        yearRelease: 2023,
        isWatched: false,
        id: 7,
    },
    {
        name: 'Fantastic Beasts and Where to Find Them',
        dateCreated: new Date('06/29/2021 20:42'),
        image: 'https://images-na.ssl-images-amazon.com/images/I/91PdOec4bFL._SL1500_.jpg',
        description: 'The adventures of writer Newt Scamander in New York\'s secret community of witches and wizards seventy years before Harry Potter reads his book in school.',
        yearRelease: 2016,
        isWatched: true,
        id: 8,
    },
]

const _watchItemsMap = {}
watchItemsList.forEach(i => _watchItemsMap[i.id] = i)


function App() {
    const [watchItems, setWatchItems] = useState(_watchItemsMap);

    const toggleIsWatched = id => {
        const item = watchItems[id];
        setWatchItems(prevState => {
            const newState = {...prevState}
            newState[id] = {...item, isWatched: !item.isWatched}
            return newState
        })
    }

    const handleDeleteItem = id => {
        setWatchItems(prevState => {
            const newState = {...prevState}
            delete newState[id]
            return newState
        })
    }

    return (
        <div className="App">
            <NewItemForm/>
            <WatchItemsList list={Object.values(watchItems)} toggleIsWatched={toggleIsWatched}
                            onDeleteItem={handleDeleteItem}/>
        </div>
    );
}

export default App;
