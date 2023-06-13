"use strict";

//global variables
const catSelectRow = document.getElementById("catSelectRow");
const listOfItems = document.getElementById("listOfItems");

const categorySelect = document.getElementById("categorySelect");

window.onload = function () {
    //wire up event handlers.
    populateSearchBy();

    populateCategorySelect();
    hideCatSelectRow();
    hideListOfItems();

    //prepare form for first use...
    searchTypeSelect.onchange = onSearchTypeSelectChange;
    categorySelect.onchange = onCategorySelectChange;


};


//function to list the options that a user can select from.
function populateSearchBy(){

    let initalOption = new Option("Please Select A Search Option", "");
    searchBySelect.appendChild(initalOption);
    let secondOption = new Option("Search By Category", "1");
    searchBySelect.appendChild(secondOption);
    let thirdOption = new Option("View All", "2");
    searchBySelect.appendChild(thirdOption);



};


//function to populate the category select list with values from the remote API.
function populateCategorySelect(){
    
    let initalOption = new Option("Please Select A Category", "");
    categorySelect.appendChild(initalOption);

    fetch("http://localhost:8081/api/categories")
        .then(response => response.json())
        .then(categories => {
            for (let category of categories) {

                let option = document.createElement("option");
                option.text = category.name;
                option.value = category.categoryId;

                categorySelect.appendChild(option);
            }
        });

};

//function to handle the response to a new search by being selected.
function onSearchTypeSelectChange(){

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
