const baseAddress = "http://localhost:5000"
const watchListAddress = `${baseAddress}/watch-list`


export async function fetchAll() {
    const promise = await fetch(watchListAddress, {method: "GET"});
    if (promise.ok) {
        const lst = await promise.json();
        lst.forEach(i => {
            const parsed = Date.parse(i.dateCreated);
            i.dateCreated = isNaN(parsed) ? new Date() : new Date(parsed);
        });
        return lst;
    }else {
        return null;
    }
}

export async function fetchOne(id) {
    const promise = await fetch(`${watchListAddress}/${id}`, {method: "GET"});
    if (promise.ok) {
        return await promise.json();
    } else {
        return null;
    }
}

export async function postNewItem(item) {
    const promise = await fetch(`${watchListAddress}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
    return promise.ok
}

let controller = null;
export async function setIsWatchedItem(id, isWatched) {
    controller?.abort()
    controller = new AbortController();
    const promise = await fetch(`${watchListAddress}/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: `{"isWatched": ${isWatched}}`,
        signal: controller.signal
    })
        .then(() => {console.log("DONE SET IS WATCH: " + isWatched ); controller = null})
        .catch((e) => { console.log(e) })
    return promise?.ok ?? false;
}

export async function removeAnItem(id) {
    const promise = await fetch(`${watchListAddress}/${id}`, {method: "DELETE"})
    return promise.ok
}

const item = {
    name: "Y",
    yearRelease: 199,
    isWatched: false,
}

async function main() {
    // const l = await fetchOne(0);
    // console.log(l)
    const res = await setIsWatchedItem(8, true)
    console.log(res)
}