function getPerson() {
    let person = +document.getElementById('person').value;
    addIngredients(person);
}

function addIngredients(x) {
    document.getElementById('ing1').innerHTML = +document.getElementById('ing1').innerHTML / 4 * x;
    document.getElementById('ing2').innerHTML = +document.getElementById('ing2').innerHTML / 4 * x;
    document.getElementById('ing3').innerHTML = +document.getElementById('ing3').innerHTML / 4 * x;
    document.getElementById('ing4').innerHTML = +document.getElementById('ing4').innerHTML / 4 * x;
    document.getElementById('ing5').innerHTML = +document.getElementById('ing5').innerHTML / 4 * x;
    document.getElementById('ing6').innerHTML = +document.getElementById('ing6').innerHTML / 4 * x;
    document.getElementById('ing7').innerHTML = +document.getElementById('ing7').innerHTML / 4 * x;
    document.getElementById('ing8').innerHTML = +document.getElementById('ing8').innerHTML / 4 * x;
    document.getElementById('ing9').innerHTML = +document.getElementById('ing9').innerHTML / 4 * x;
}