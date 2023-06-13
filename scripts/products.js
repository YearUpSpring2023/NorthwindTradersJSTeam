"use strict";

//global variables


window.onload = function () {
    //wire up event handlers.
    populateSearchBy();
    populateCategorySelect();
    hideCatSelectRow();
    hideListOfItems();
    //prepare form for first use...
    searchBySelect.onchange = onSearchBySelectChange;
    categorySelect.onchange = onCategorySelectChange;


};


//function to list the options that a user can select from.
function populateSearchBy(){


};


//function to populate the category select list with values from the remote API.
function populateCategorySelect(){


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
