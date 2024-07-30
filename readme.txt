# Find Prime Numbers Game

This is a simple game to identify prime numbers. The user selects numbers from a grid, and the game checks if all selected numbers are prime.

## Table of Contents
- [Usage](#usage)
- [Files](#files)
- [How it Works](#how-it-works)
- [License](#license)

## Usage

To play the game, open the `index.html` file in your web browser. You will see a grid of numbers from 1 to 100. Click on the numbers you believe are prime. After making your selections, click the "Submit" button to check your answers. If you want to exit the game, click the "Exit Game" button.

## Files

- `index.html`: The HTML file that defines the structure of the web page.
- `styles.css`: The CSS file that contains the styles for the game.
- `app.js`: The JavaScript file that contains the logic for the game.

## How it Works

### HTML (`index.html`)

This file sets up the structure of the web page. It includes a container for the grid of numbers, control buttons for submitting the selection and exiting the game, and a message area to display the results.

### CSS (`styles.css`)

This file contains styles for the various elements of the game, including the grid container, grid items, and control buttons.

### JavaScript (`app.js`)

This file contains the logic for generating the grid of numbers, handling user selections, checking if the selected numbers are prime, and displaying the results.

- **Generating the Grid:**
    ```javascript
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
    ```

- **Toggling Selection:**
    ```javascript
    function toggleSelection(element) {
        element.classList.toggle('selected');
    }
    ```

- **Checking for Primes:**
    ```javascript
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
        if (confirm('Are you sure you want to exit the game?')) {
            window.close();
        }
    }
    ```

## License

This project is licensed under the MIT License. See the LICENSE file for more information.
