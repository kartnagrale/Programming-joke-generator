let joke = document.getElementById("joke");
let category = document.getElementById("category");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Programming?type=single";

let getjoke = () => {
    joke.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        joke.textContent = `${item.joke}`;
        joke.classList.add("fade");
    });
};

btn.addEventListener("click", getjoke);
getJoke();
