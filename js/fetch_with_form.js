//Get Data from a form

//Procedural Workflow function
export const processJokeRequest = async () => {
    const requestData = getDataFromForm();
    const requestUrl = buildRequestUrl(requestData);
    await requestJoke(requestUrl);
    console.log("Done");
}

export const getDataFromForm = () => {
    return {
        firstName: "Bruce",
        lastName: "Lee",
        categories: ["nerdy"]
    };
}

export const buildRequestUrl = (requestObjData) => {
    return `http://api.icndb.com/jokes/random?firstName=${requestObjData.firstName}&lastName=${requestObjData.lastName}&limitTo=${requestObjData.categories}`;
}

export const requestJoke = async (url) => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const joke = jsonResponse.value.joke;
    postJokeToPage(joke);
}

export const postJokeToPage = (joke) => {
    console.log(joke);
}