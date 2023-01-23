function getPerson() {
    reset();
    let person = +document.getElementById('person').value;
    addIngredients(person);

}

function addIngredients(x) {
    document.getElementById('ing1').innerHTML = document.getElementById('ing1').innerHTML / 4 * x;
    document.getElementById('ing2').innerHTML = document.getElementById('ing2').innerHTML / 4 * x;
    document.getElementById('ing3').innerHTML = document.getElementById('ing3').innerHTML / 4 * x;
    document.getElementById('ing4').innerHTML = document.getElementById('ing4').innerHTML / 4 * x;
    document.getElementById('ing5').innerHTML = document.getElementById('ing5').innerHTML / 4 * x;
    document.getElementById('ing6').innerHTML = document.getElementById('ing6').innerHTML / 4 * x;
    document.getElementById('ing7').innerHTML = document.getElementById('ing7').innerHTML / 4 * x;
    document.getElementById('ing8').innerHTML = document.getElementById('ing8').innerHTML / 4 * x;
    document.getElementById('ing9').innerHTML = document.getElementById('ing9').innerHTML / 4 * x;

}

function reset() {
    document.getElementById('ing1').innerHTML = `500`;
    document.getElementById('ing2').innerHTML = `5`;
    document.getElementById('ing3').innerHTML = `2`;
    document.getElementById('ing4').innerHTML = `2`;
    document.getElementById('ing5').innerHTML = `1`;
    document.getElementById('ing6').innerHTML = `2`;
    document.getElementById('ing7').innerHTML = `200`;
    document.getElementById('ing8').innerHTML = `300`;
    document.getElementById('ing9').innerHTML = `200`;

}