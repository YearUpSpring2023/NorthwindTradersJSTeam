"use strict";

//global variables
const  = document.getElementById("");

window.onload = function () {
    //wire up event handlers.

    //prepare form for first use...


};


//function to list the options that a user can select from.
function populateSearchBy(){


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
function onSearchBySelectChange(){

}

//function to handle the response to a new category being selected.
function onCategorySelectChange(){

};


function createProductsRow(product){

};


function hideCatSelectRow() {
  
}

function showCatSelectRow() {
   
}

function hideListOfItems() {


}

function showListOfItems() {
    

}
