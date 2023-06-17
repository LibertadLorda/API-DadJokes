const jokeEl = document.querySelector('.joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener("click", generateJoke)
 
// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };


  const res = await fetch("https://icanhazdadjoke.com", config)
  .then((res) => res.json())
  //const data = await res.json()
  .then((data) => {
    jokeEl.innerHTML = data.joke;
})
}



// USING .then()
//ESTO YA ESTA UTILIZADO
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   >>fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
