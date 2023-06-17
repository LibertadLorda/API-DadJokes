const jokeEl = document.querySelector('.joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener("click", generateJoke)
 
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

const res = await fetch("https://icanhazdadjoke.com", config)
.then((res) => res.json())
  .then((data) => {
    jokeEl.innerHTML = data.joke;
})
}