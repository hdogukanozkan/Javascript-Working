const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');


jokeBtn.addEventListener('click', generateJokes)

/* function generateJokes() {
    var config = {
        headers: {
            Accept: 'application/json',
        }
    }

    fetch('https://icanhazdadjoke.com/', config).then((res) => res.json()).then((data) => jokeEl.innerText = data.joke)

}
 */

async function generateJokes() {
    var config = {
        headers: {
            Accept: 'application/json',
        }
    }

    const res = await fetch('https://icanhazdadjoke.com/', config);
    console.log(res);
    const data = await res.json();
    console.log(data);
    jokeEl.innerText = data.joke

}