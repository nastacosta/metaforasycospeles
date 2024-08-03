let loadRandomWords = async () => {
  let randomWords = [];
  for (let i = 0; i < 4; i++) {
    let response = await fetch(
      "https://clientes.api.greenborn.com.ar/public-random-word"
    );
    let palabraRandom = await response.json();
    randomWords.push(palabraRandom.toString().toUpperCase());
  }
  document.querySelector(".title").innerText = randomWords;
};

loadRandomWords();
