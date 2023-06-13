"use strict";

//global variables
const catSelectRow = document.getElementById("catSelectRow");
const listOfItems = document.getElementById("listOfItems");



window.onload = function () {
    //wire up event handlers.

    //prepare form for first use...


};


//function to list the options that a user can select from.
function populateSearchBy(){


};


//function to populate the category select list with values from the remote API.
function populateCategorySelect(){


};

//function to handle the response to a new search by being selected.
function onSearchBySelectChange(){
        listOfItems.innerHTML = "";
        let searchBySelected = searchBySelect.value;
    
        if (searchBySelected == 1) {
            showCatSelectRow();
        } else if (searchBySelected == 2) {
            showListOfItems();
            hideCatSelectRow();
            fetch("http://localhost:8081/api/products")
                .then(response => response.json())
                .then(products => {
                    for (let product of products) {
                        createProductRow(product);
                    }
                });
        }
    }

//function to handle the response to a new category being selected.
function onCategorySelectChange(){

};


function createProductsRow(product){

};


function hideCatSelectRow() {
  
    catSelectRow.style.display = "none";

}

function showCatSelectRow() {
   
    catSelectRow.style.display = "block";

}

function hideListOfItems() {

    listOfItems.style.display = "none";

}

function showListOfItems() {
    
    listOfItems.style.display = "block";

}
