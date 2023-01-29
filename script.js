function getQuote() {
  const ranQuote = fetch("https://dummy-apis.netlify.app/api/quote");
  ranQuote
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const quote = data.quote;
      const author = data.author;

      document.querySelector("p").innerText = quote;
      document.querySelector("figcaption").innerText = author;
    });
}

document.querySelector("button").addEventListener("click", getQuote);
