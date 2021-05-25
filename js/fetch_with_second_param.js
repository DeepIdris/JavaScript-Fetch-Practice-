//2nd paramter of Fetch

//GET

export const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    });
    const jsonJokeData = await  response.json();
    console.log(jsonJokeData);
}

// POST

const jokeObject = {
    id: "0oO71TSv4Ed",
    joke: "WHy was it called the dark ages? Because of all the knights."
}

export const postData = async (jokeObj) => {
    const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jokeObj)
    });

    const jsonResponse = await response.json();
    console.log(jsonResponse.headers);
}