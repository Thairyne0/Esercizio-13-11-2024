// https://striveschool-api.herokuapp.com/books

fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((books) => {
    console.log("BOOKS", books);

    const riga = document.getElementById("riga-libri");

    for (let i = 0; i < books.length; i++) {}
  })
  .catch((error) => {
    console.log(error);
  });
