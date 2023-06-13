"use strict"

// Variables

const productDetailsCard = document.getElementById("productDetailsCard"); // This is where the product details will be displayed


/*_________________________________________________________________________________*/

window.onload = function() {

    // Fetch product details data from API
    fetchDataFromAPITwo();
    addProductDetailsToProductCard();

}

//Function - Fetching the Data from the second API: Products

function fetchDataFromAPITwo() {
    fetch('http://localhost:8081/api/products')
      .then(response => response.json())
      .then(data => {
        console.log(data); // data has been fetched.
        products = data; // Store the fetched products
      });
  }


// Function - This function will display the product details onto the HTML

function addProductDetailsToProductCard(products) {


showProductDetailsCard();
console.log('Product detail card displayed')
}


