// Get DOM elements
const userDetailsForm = document.getElementById('userDetailsForm');
const startGameButton = document.getElementById('startGameButton');
const gameContainer = document.getElementById('gameContainer');

// Add click event listener to the "Start Game" button
startGameButton.addEventListener('click', () => {
    // Get user details
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    // Validate user details (you can add more validation)
    if (name.trim() === '' || age <= 0) {
        alert('Please enter valid details.');
        return;
    }

    // Hide the user details form and show the game content
    userDetailsForm.style.display = 'none';
    gameContainer.style.display = 'block';

    // Start the game logic here
    // For now, we'll just display a loading message
    gameContainer.innerHTML = '<p>Game is loading...</p>';
});
