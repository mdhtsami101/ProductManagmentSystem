

var productNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var productCateogryInput = document.getElementById("productCateogryInput");
var productDescriptionInput = document.getElementById("productDescriptionInput");
var productsContainer=[];

if(localStorage.getItem("products") != null){
    productsContainer=JSON.parse(localStorage.getItem("products"));
    displayProducts();
}

function addProduct(){

    if(validateProductName()==true){
        var product ={
            name:productNameInput.value,
            price:productPriceInput.value,
            cateogry:productCateogryInput.value,
            desc:productDescriptionInput.value
        };
        productsContainer.push(product);
        localStorage.setItem("products", JSON.stringify(productsContainer));
        clearForm();
        displayProducts();

    } else{
        window.alert('Invalid ProductName')
    }
 
};

function clearForm() {
    productNameInput.value="";
    productPriceInput.value="";
    productCateogryInput.value="";
    productDescriptionInput.value="";
}

function displayProducts (){
    var bodyElementTable=``;
    for (var i = 0; i < productsContainer.length; i++) {
        bodyElementTable+=
        `<tr>
        <td>${i}</td>
        <td>${productsContainer[i].name}</td>
        <td>${productsContainer[i].price}</td>
        <td>${productsContainer[i].cateogry }</td>
        <td>${productsContainer[i].desc}</td>
        <td><button onclick="deleteProducts(${i})" class="btn btn-outline-danger btn-sm">Delete</button></td>
        <td><button onclick="updateProduct(${i})" class="btn btn-outline-warning btn-sm">Update</button></td>
   
    </tr>`
    }
    document.getElementById('tableBody').innerHTML=bodyElementTable;

};


function deleteProducts(deleteIndex){
    productsContainer.splice(deleteIndex,1);
    localStorage.setItem("products", JSON.stringify(productsContainer));
    displayProducts();

};


function searchProducts(trem){
    var bodyElementTable=``;
 for (let i = 0; i < productsContainer.length; i++) {
 if(productsContainer[i].name.toLowerCase().includes(trem.toLowerCase()) == true){
    bodyElementTable+=
    `<tr>
    <td>${i}</td>
    <td>${productsContainer[i].name}</td>
    <td>${productsContainer[i].price}</td>
    <td>${productsContainer[i].cateogry }</td>
    <td>${productsContainer[i].desc}</td>
    <td><button onclick="deleteProducts(${i})" class="btn btn-outline-danger btn-sm">Delete</button></td>
    <td><button onclick="updateProduct(${i})" class="btn btn-outline-warning btn-sm">Update</button></td>

</tr>`
 }
 document.getElementById('tableBody').innerHTML=bodyElementTable;

 }
};


function validateProductName(){
var regex = /^[a-z]|[A-Z][a-z]{3,8}$/;

if(regex.test(productNameInput.value)==true){
    return true;
}else{
    return false;
}
};


function updateProduct(updateIndex){
    for (let i = 0; i < productsContainer.length; i++) {

        if(updateIndex===i){
            productNameInput.value=productsContainer[i].name;
            productPriceInput.value=productsContainer[i].price;
            productCateogryInput.value=productsContainer[i].cateogry;
            productDescriptionInput.value=productsContainer[i].desc;

            deleteProducts(i);

        }
       
    }


    
    

  

};






