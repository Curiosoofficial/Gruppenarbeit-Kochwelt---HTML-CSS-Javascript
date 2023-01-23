let menge = [125, 25, 50, 1, 0.5, 0.75, 0.5, '']
let einheit = ['g', 'g', 'g', '', '', ' Tassen', ' EL', '']
let zutat = ['Mascarpone', 'Puderzucker', 'Löffelbiskuits', 'Eigelb', 'Eiweiss', 'Kaffee', 'Amaretto', 'Kakaopulver']


function displayIngredients() {
    for (let i = 0; i < menge.length; i++) {
        document.getElementById('ingredientsList').innerHTML += `<p><span id="ingredient${i}">${menge[i]}</span>${einheit[i]} ${zutat[i]}</p>`
    }
}

// Ich will bei dieser funktion auf die 0-position des menge arrays zugreifen und es multiplizieren. Zum bsp. (position 0 = 125) * 6

function calculateIngredients(){
    for (let i = 0; i < menge.length; i++){
    let result = menge[i] * +document.getElementById('input').value;
    console.log(result);

    document.getElementById('ingredient' + i).innerHTML = result;
    }

}

