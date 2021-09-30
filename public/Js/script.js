//déclaration variables
const furnitureElt = document.getElementById("products");
//initialiser l'adresse API

let url = "http://localhost:3000/api/furniture";

//Récupération des articles depuis l'API
fetch(url, { methode: "GET" })
  .then((response) => {
    return response.json();

    //Transformations des objets en json
  })
  .then((furnitures) => {
    let cardArticles = "";

    // Affichage de nos articles

    furnitures.forEach((product) => {
      console.log(product.name);
      console.log(product.price);

      //Formatage du format du prix

      let priceArticle = product.price / 100;
      let newPrice = new Intl.NumberFormat("fr-Fr", {
        style: "currency",
        currency: "EUR",
      }).format(priceArticle);

      //injection code HTML pour afficher nos articles meubles sur la page

      cardArticles += `<figure>
						<img src="${product.imageUrl}" alt="${product.name}">
						<figcaption>
							<h2>${product.name}</h2>
							<p>${newPrice}</p>
							<a href="./view/product.html?id=${product._id}">Voir l'article </a>
						</figcaption>
					</figure>`;
    });
    furnitureElt.innerHTML = cardArticles;
  })

  .catch((error) => {
    let productsContainer = document.getElementById("meubles_chêne");
    productsContainer.innerHTML =
      "Oups ! Merci de demarrer votre serveur au port 300 <br> si le problème persiste, contactez-nous";
  });
