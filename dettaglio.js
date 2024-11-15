const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MjNjYzhhZDEyOTAwMTU4NzZjOWUiLCJpYXQiOjE3MzE2NjY4OTIsImV4cCI6MTczMjg3NjQ5Mn0.fe5wexAEaHVFf95XGC1TR1vg28WLLMfxN42-P-SPgr0"

const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
}

const productId = new URLSearchParams(window.location.search).get("id")

fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
  method: "GET",
  headers: headers,
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    document.getElementById("product-detail").innerHTML = `
    <h1>${data.name}</h1>
    <p>${data.description}</p>
    <p><strong>Prezzo:</strong> ${data.price}€</p>
    <img src="${data.imageUrl}" alt="${data.name}" height="90%" width="90%">
  `
  })
  .catch((error) => alert("Errore, impossibile caricare il prodotto"))
