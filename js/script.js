document.getElementById('countButton').addEventListener('click', calculate);
document.getElementById('resetButton').addEventListener('click', resetForm);

function calculate() {
    var sideLength = parseFloat(document.getElementById('squareSide').value);

    var area = sideLength * sideLength;
    var perimeter = 4 * sideLength;

    document.getElementById('hasilluas').innerText = isNaN(area) ? "Invalid Input" : area;
    document.getElementById('hasilkeliling').innerText = isNaN(perimeter) ? "Invalid Input" : perimeter;
}

function resetForm() {
    document.getElementById('squareSide').value = '';
    document.getElementById('hasilluas').innerText = '';
    document.getElementById('hasilkeliling').innerText = '';
}
