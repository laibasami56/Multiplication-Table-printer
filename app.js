const colors = ['#00bfa5', '#8e44ad', '#3498db', '#e74c3c', '#f39c12', '#2ecc71', '#762d97', '#432c83', '	#3e5096', '	#eaeef0', '	#b8e1f0', '	#76ade5'];
let currentColorIndex = 0;

function generateTable() {
    const tableNumber = document.getElementById('table-number').value;
    const startRange = document.getElementById('start-range').value;
    const endRange = document.getElementById('end-range').value;
    const outputDiv = document.getElementById('table-output');

    // Clear previous output
    outputDiv.innerHTML = '';

    if (tableNumber && startRange && endRange) {
        const start = parseInt(startRange);
        const end = parseInt(endRange);
        const number = parseInt(tableNumber);

        if (start <= end) {
            for (let i = start; i <= end; i++) {
                const result = number * i;
                const p = document.createElement('p');
                p.textContent = `${number} x ${i} = ${result}`;
                outputDiv.appendChild(p);
            }
        } else {
            alert('Start range should be less than or equal to end range.');
        }
    } else {
        alert('Please fill in all fields.');
    }
}

function switchBackgroundColor() {
    const body = document.body;
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    body.style.backgroundColor = colors[currentColorIndex];
}
