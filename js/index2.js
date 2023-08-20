

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






// var product ={ 
//         ip14: {
//         name:'apple 14 pro',
//         price:30000,
//         eat:function (meal) {
//             console.log(meal);
//         },
//         code:'ph14 555'  
//     },
//        ip13 : {
//         name:'apple 13 pro',
//         price:20000,
//         code:'ph13 1313'  
//     },
//        ip12 : {
//         name:'apple 12 pro',
//         price:30000,
//         code:'ph12 1212'  
//     },

 

// };


// console.log(product.ip12.code);




// var frindes =["ahmed", "zenib", "nada" , "aya" , "medhat"];
// var oldFrindes =["noha"];
// for(var i =0 ; i < frindes.length ; i++){
//     console.log(frindes[i]);
// }

// console.log(frindes.sort());
// console.log(frindes.reverse());
// frindes.push("tamer"); //end of arr
// frindes.unshift("srar")//start of arr
// frindes.pop(); //remove last element
// frindes.shift(); //remove first element
// console.log(frindes.slice(1,3)); //copy the part from arr
// frindes.splice(2,1);
// frindes.indexOf("nada" , 2);
// frindes.lastIndexOf("nada" , 2);
// frindes.includes("nada")
// frindes.concat(oldFrindes)
// frindes.toString();
// frindes.join(" ")
// console.log(frindes.join(" "));




// var userName = "samsung note 8";
// var trem = "notes";
// console.log(userName.toLowerCase().includes(trem.toLowerCase()));



//  Regular Expression   //
