let product_array = [];

console.log(product_array);

function test(){
    
    console.log(typeof product_array);

    let newProduct = document.getElementById("txt_city").value;
    product_array.push(newProduct);

    
    printProduct(product_array); // su funkcijos kvietumu - siunciam kintamaji (masivas) "cities"    printCities(cities);
}


function printProduct(product_array){ 
    let h = "";
    for(let i = 0; i < product_array.length; i++){
        console.log(i);
        console.log(product_array[i]);
        h = h + "<div><h3 class='prettyText'>"+product_array[i]+"</h3></div>"; // string aggregate
    }
    document.getElementById("result").innerHTML = h;
}