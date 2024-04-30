const addToCartBtn = document.getElementById('button');
let quantityDisplayEl = document.getElementById("quantityDisplay");


addToCartBtn.addEventListener('click', function() {
    const selectedSize = document.querySelector('input[name="size"]:checked').value;
    const selectedColor = document.querySelector('.color-container div.active').style.backgroundColor;
    let colorName;
    switch (selectedColor) {
        case 'rgb(236, 222, 204)': // yellow
            colorName = 'Yellow';
            break;
        case 'rgb(187, 210, 120)': // green
            colorName = 'Green';
            break;
        case 'rgb(187, 193, 248)': // blue
            colorName = 'Blue';
            break;
        case 'rgb(255, 211, 248)': // pink
            colorName = 'Pink';
            break;
        default:
            colorName = 'Unknown';
    }

    const detailsParagraph = document.createElement('p');
    detailsParagraph.textContent = `Embrace Sideboard with colour ${colorName} and size ${selectedSize} is added to cart `;
    detailsParagraph.classList.add('paragraph');
    const selectedDetailsDiv = document.getElementById('selectedDetails');

    selectedDetailsDiv.innerHTML = '';

    selectedDetailsDiv.appendChild(detailsParagraph);
});

const colorOptions = document.querySelectorAll('.color-container div');


colorOptions.forEach(function(colorOption) {
    colorOption.addEventListener('click', function() {
        colorOptions.forEach(function(option) {
            option.classList.remove('active');
        });
        colorOption.classList.add('active');
    });
});

function decreaseButton() {
    let previousValue = quantityDisplayEl.textContent;
    let updatedValue = parseInt(previousValue) - 1;

    if (previousValue > 0) {
        quantityDisplayEl.textContent = updatedValue;
    } else {
        quantityDisplayEl.textContent = 0;
    }
}

function increaseButton() {
    let previousValue = quantityDisplayEl.textContent;
    let updatedValue = parseInt(previousValue) + 1;
    quantityDisplayEl.textContent = updatedValue;
}
