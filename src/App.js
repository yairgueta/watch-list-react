import WatchItemsList from "./components/WatchItemsList";

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
        isWatched: false,
        id: 3,
    },



]

function App() {
    return (
        <div className="App">
            <WatchItemsList list={watchItemsList}/>
        </div>
    );
}

export default App;
