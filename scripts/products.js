"use strict";

//global variables


window.onload = function () {
    //wire up event handlers.
    populateSearchBy();
    //prepare form for first use...


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
