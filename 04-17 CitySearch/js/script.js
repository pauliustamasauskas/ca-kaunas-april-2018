let miestai = ["New york", "Berlin","Oslo","Riga","Moscow","Rome",""];

function check() {
    
    let city = document.getElementById("city").value;
    console.log(city);


let cityFound = false;
if(miestai.indexOf(city) > -1){
    cityFound = "Toks miests yra";
}else
cityFound = "TOkio miesto nera";
}

document.getElementById("result").innerHTML = "<h3>"+cityFound+"<h3>";

