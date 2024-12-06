function warehouse(units) {
    if (units < 10) {
        console.log("Rostock Immediately");
    } else if (units >= 10 && units <= 20) {
        console.log("Stock is Low");
    } else {
        console.log("Adequate");
    }

}
let x = 21
console.log(warehouse(x))