let product_array = [];

let product_array_string = localStorage.getItem("product_array");
console.log(product_array_string);

let product_stored = JSON.parse(product_array_string);
console.log(product_stored);

function add(){
 
    let newProduct = document.getElementById("prod").value;

    let rasta_dublikatu = false;
    
    rasta_dublikatu = checkForDuplicates(newProduct, product_array);

    if (rasta_dublikatu  ==  false) {
        product_array.push(newProduct);
    } else {
        alert("Reiksme jau egzistuoja!");
    }   
   
    console.log(product_array)

    let product_array_string = JSON.stringify(product_array);
    localStorage.setItem("product_array", product_array_string);
   
    printProducts(product_array);
}

function printProducts(product_array){
    let h = "";
    h = h + "<ul>";
    for(let i = 0; i < product_array.length; i++) {        
        h = h + "<li>"+product_array[i] + "</li>";
    }
    h = h + " </ul>";   
    document.getElementById("result").innerHTML = h;
}



function checkForDuplicates(newProduct, product_array){
    let found = false;
    
    for(let i = 0; i < product_array.length; i++){
        if(product_array[i] == newProduct){
            found = true;
        }        
    }

    return found;
}