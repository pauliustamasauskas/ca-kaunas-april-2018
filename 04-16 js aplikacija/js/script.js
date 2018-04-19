let product_array = [];

function test() {

    let newProduct = document.getElementById("txt_product").value;

    let egzistuoja = false;

    egzistuoja = checkForDuplicates(newProduct, product_array);

    if (egzistuoja) {

        alert("DUPLIKATAS");
    } else {

        product_array.push(newProduct);
    }

    printProduct(product_array);
}


function printProduct(product_array) {
    let h = "";
    h = h + "<ul>";
    for (let i = 0; i < product_array.length; i++) {
        h = h + "<li>" + product_array[i] + "</li>";
    }
    h = h + "</ul>";
    document.getElementById("result").innerHTML = h;
}

function checkForDuplicates(newProduct, product_array) {
    let found = false;
    for (let i = 0; i < product_array.length; i++) {
        if (product_array[i] == newProduct) {
            found = true;
        }
    }
    return found;
}

