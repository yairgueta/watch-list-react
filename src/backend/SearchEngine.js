const root = "https://www.omdbapi.com/?apikey=5c12e6a0";
const search        = `${root}&s=`;
const findByID      = `${root}&i=`;
const findByTitle   = `${root}&t=`;


let searchController = null
export async function searchKeyword(keyword) {
    searchController?.abort();
    searchController = new AbortController();
    const promise = await fetch(`${search}${keyword}`, {method: "GET", signal: searchController.signal})
        .catch(()=>{})
    searchController = null;
    const res = await promise.json();
    if (res.Response) {
        return res.Search
    } else {
        return []
    }

}


async function main() {
    const s = await searchKeyword("Avengers")
    console.log(s)
}

main()