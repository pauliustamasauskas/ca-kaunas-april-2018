let cities = [];

"New York";

cities.push("Jonava");
cities.push("Vilnius");
cities.push("Kaunas");
cities.push;

let h = "";
for (let i = 0; i < cities.length; i++) {
    console.log(i);
    console.log(cities[i]);
    h = h + "<div><h3 class='prettyText'>" + cities[i] + "</h3></div>"; //string aggregate
}
document.getElementById("result").innerHTML = h;

console.log(cities);
console.log(cities.toString());

function test() {

    console.log(typeof cities);

    let newCity = document.getElementById("txt_city").value;
    cities.push(newCity);

    document.getElementById("result").innerText = cities;

    printCities(cities);
}

function printCities(cities){
    let h = "";
    for (let i = 0; i < cities.length; i++) {
        console.log(i);
        console.log(cities[i]);
        h = h + "<div><h3 class='prettyText'>" + cities[i] + "</h3></div>"; //string aggregate
    }
    document.getElementById("result").innerHTML = h;
}