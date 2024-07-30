document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('numbers-grid');
    for (let i = 1; i <= 100; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.textContent = i;
        div.onclick = () => toggleSelection(div);
        gridContainer.appendChild(div);
    }
});

function toggleSelection(element) {
    element.classList.toggle('selected');
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function checkPrimes() {
    const selectedItems = document.querySelectorAll('.selected');
    const selectedNumbers = Array.from(selectedItems).map(item => parseInt(item.textContent));
    const allPrimes = Array.from({ length: 100 }, (_, i) => i + 1).filter(isPrime);

    if (selectedNumbers.length !== allPrimes.length || !selectedNumbers.every(num => allPrimes.includes(num))) {
    document.getElementById('message').textContent = 'There are incorrect selections. Try again!';
    document.getElementById('message').style.color = 'red';
} else {
    document.getElementById('message').textContent = 'Congratulations! You correctly identified all prime numbers.';
    document.getElementById('message').style.color = 'green';
}

}

function exitGame() {
    if (confirm('Oyundan çıkmak istediğinize emin misiniz?')) {
        window.close();
    }
}
