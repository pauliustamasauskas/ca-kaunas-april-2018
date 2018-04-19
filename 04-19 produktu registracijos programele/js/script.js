let PRODUKTAI = [];

let produktas_list_string = localStorage.getItem("PRODUKTAI");
console.log(produktas_list_string);

let PRODUKTAI_stored = JSON.parse(produktas_list_string);
console.log(PRODUKTAI_stored);

function sukurti() {

    let produktas_text = document.getElementById("produktas").value;

    let kaina_text = document.getElementById("kaina").value;
    let kaina_number = Number(kaina_text);

    let kiekis_text = document.getElementById("kiekis").value;
    let kiekis_number = Number(kiekis_text);

    let miestas_text = document.getElementById("miestas").value;


    let pavadinimas = {
        produktas: produktas_text,
        kaina: kaina_number,
        kiekis: kiekis_number,
        miestas: miestas_text,
    }

    PRODUKTAI.push(pavadinimas);
    console.log(PRODUKTAI);


    let PRODUKTAI_string = JSON.stringify(PRODUKTAI);
    localStorage.setItem("PRODUKTAI", PRODUKTAI_string);

    printProducts(PRODUKTAI);
}

function printProducts(PRODUKTAI){
    let h = "";
    h = h + "<table class='";
    for(let i = 0; i < produktas_array.length; i++) {        
        h = h + "<li>"+produktas_array[i] + "</li>";
    }
    h = h + " </ul>";   
    document.getElementById("result").innerHTML = h;
}