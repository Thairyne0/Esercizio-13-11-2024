// https://striveschool-api.herokuapp.com/books

fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((books) => {
    console.log("BOOKS", books);

    const riga = document.getElementById("riga-libri");

    const placeholder = document.getElementById("riga-libri-placeholder");

    placeholder.classList.add("d-none");

    books.forEach((book) => {
      riga.innerHTML += `<div class="card" style="width: 18rem;">
      <img src="${book.img}" class="card-img-top mt-3" alt="${book.title}" style = "height: 390px">
      <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <p class="card-text">Price: $${book.price}</p>
        <p class="card-text">Category: ${book.category}</p>
      </div>
    </div>`;
    });
  })
  .catch((error) => {
    console.log(error);
  });
