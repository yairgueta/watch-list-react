const root = "https://www.omdbapi.com/?apikey=5c12e6a0";
const search        = `${root}&s=`;
const findByID      = `${root}&i=`;
const findByTitle   = `${root}&t=`;

type APISearchResult = {
    Title: string,
    Year: string,
    imdbID: string,
    Poster: string,
}

type SearchResult = {
    title: string,
    yearRelease: string,
    image: string,
    id: string
}

type APIIDResult = {
    Title: string,
    Year: string,
    Poster: string,
    Plot: string,
    Response: string
}

type MovieItem = {
    title: string,
    yearRelease: string,
    image: string,
    description: string,
    id: string,
}

let searchController: AbortController | null = null
export async function searchKeyword(keyword: string) : Promise<Array<SearchResult>> {
    searchController?.abort();
    searchController = new AbortController();
    const promise = await fetch(`${search}${keyword}`, {method: "GET", signal: searchController.signal})
        .catch(()=>{})
    searchController = null;
    const res = await promise?.json();
    if (res?.Response) {
        const searchResults : Array<APISearchResult> | null | undefined = res.Search
        if (searchResults === null || searchResults === undefined) {
            return []
        }
        return searchResults.map(result => {
            const sr = {
                title: result.Title,
                yearRelease: result.Year,
                image: result.Poster,
                id: result.imdbID
            }
            return sr as SearchResult
        } )
    } else {
        return []
    }
}

export async function findMovieByID(ID: string) : Promise<MovieItem | null> {
    const promise = await fetch(`${findByID}${ID}`, {method: "GET"}).catch(()=>{});
    const result : APIIDResult = await promise?.json();
    if (result.Response == "True") {
        const movieItem = {
            title: result.Title,
            yearRelease: result.Year,
            image: result.Poster,
            description: result.Plot,
            id: ID
        }
        return movieItem as MovieItem
    } else {
        return null
    }
}

async function main() {
    console.log(await findMovieByID("5555"));

    console.log(await findMovieByID("tt0056085"));
}

main()