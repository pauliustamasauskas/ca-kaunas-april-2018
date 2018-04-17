let product_array = [];

console.log(product_array);

function test(){
    
    console.log(typeof product_array);

    let newProduct = document.getElementById("txt_product").value;
    product_array.push(newProduct);

    document.getElementById("result").innerText = product_array;

    printProduct(product_array);
}


function printProduct(product_array){ 
    let h = "";
    for(let i = 0; i < product_array.length; i++){
        console.log(i);
        console.log(product_array[i]);
        h = h + "<ul><li>"+product_array[i]+"</li></ul>";
    }
    document.getElementById("result").innerHTML = h;
}